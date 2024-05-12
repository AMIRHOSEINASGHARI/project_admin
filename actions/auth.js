"use server";

// next
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
import { hashPassword, verifyPassword } from "@/utils/functions";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// models
import Admin from "@/utils/models/admin";
// jwt
import { sign } from "jsonwebtoken";

export const createAdmin = async (data) => {
  try {
    await connectDB();

    const { username, name, password } = data;

    const admin = await Admin.findOne({ username });

    if (admin) {
      return {
        message: MESSAGES.user_exist,
        status: MESSAGES.failed,
        code: STATUS_CODES.exist,
      };
    }

    const hashedPassword = await hashPassword(password);

    await Admin.create({ username, password: hashedPassword, name });

    return {
      message: MESSAGES.register,
      status: MESSAGES.success,
      code: STATUS_CODES.success,
    };
  } catch (error) {
    console.log(error);
    return {
      message: MESSAGES.server,
      status: MESSAGES.failed,
      code: STATUS_CODES.server,
    };
  }
};

export const loginAdmin = async (data) => {
  try {
    await connectDB();

    const { username, password } = data;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return {
        message: MESSAGES.user_no_exist,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    // verify password
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      return {
        message: MESSAGES.user_no_exist,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    // creating token
    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: admin.name,
        avatar: admin.avatar,
        roll: admin.roll,
      },
      SECRET_KEY,
      {
        expiresIn: SESSION_EXPIRATION,
      }
    );

    // setting token in cookie
    cookies().set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + SESSION_EXPIRATION),
      sameSite: "lax",
      path: "/",
    });

    return {
      message: MESSAGES.login,
      status: MESSAGES.success,
      code: STATUS_CODES.success,
    };
  } catch (error) {
    console.log(error);
    return {
      message: MESSAGES.server,
      status: MESSAGES.failed,
      code: STATUS_CODES.server,
    };
  }
};

export const signOut = () => {
  cookies().delete("accessToken");
  redirect("/");
};
