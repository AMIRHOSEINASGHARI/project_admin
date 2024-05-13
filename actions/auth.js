"use server";

// next
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
import { verifyPassword } from "@/utils/functions";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// models
import Admin from "@/utils/models/admin";
// jwt
import { sign } from "jsonwebtoken";

export const createToken = (data) => {
  try {
    const { _id, name, avatar, roll } = data;

    const accessToken = sign(
      {
        username,
        userId: _id,
        name: name,
        avatar: avatar,
        roll: roll,
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
      message: MESSAGES.success,
      status: MESSAGES.success,
      code: STATUS_CODES.created,
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

export const login = async (data) => {
  try {
    await connectDB();

    const { username, password } = data;

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    // verify password
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    // creating token
    createToken(admin);

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
