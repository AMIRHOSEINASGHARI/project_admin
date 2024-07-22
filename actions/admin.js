"use server";

// next
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
import { hashPassword, verifyPassword } from "@/utils/functions";
import { getServerSession } from "@/utils/session";
import { SECRET_KEY, SESSION_EXPIRATION } from "@/utils/vars";
// models
import Admin from "@/utils/models/admin";
import { Product } from "@/utils/models/product";
import { Blog } from "@/utils/models/blog";
// jwt
import { sign } from "jsonwebtoken";

export const createAdmin = async (data) => {
  try {
    await connectDB();

    const {
      username,
      name,
      password,
      email,
      phoneNumber,
      address,
      country,
      roll,
    } = data;

    const admin = await Admin.findOne({ username });

    if (admin) {
      return {
        message: MESSAGES.user_exist,
        status: MESSAGES.failed,
        code: STATUS_CODES.exist,
      };
    }

    const hashedPassword = await hashPassword(password);

    await Admin.create({
      username,
      password: hashedPassword,
      name,
      email,
      phoneNumber,
      address,
      country,
      roll,
    });

    revalidatePath("/account");

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

export const updateProfile = async (data) => {
  try {
    await connectDB();

    const {
      username,
      newPassword,
      currentPassword,
      name,
      email,
      phoneNumber,
      address,
      country,
      image,
    } = data;
    console.log(data);

    const session = getServerSession();

    const admin = await Admin.findById(session.userId);

    // check admin exist
    if (!admin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    // check username and name entered
    if (!username || !name) {
      return {
        message: MESSAGES.badRequest,
        status: MESSAGES.failed,
        code: STATUS_CODES.badRequest,
      };
    }

    // creating new password
    if (newPassword) {
      const isValidPassword = await verifyPassword(
        currentPassword,
        admin.password
      );

      if (!isValidPassword) {
        return {
          message: MESSAGES.noMatchPassword,
          status: MESSAGES.failed,
          code: STATUS_CODES.badRequest,
        };
      } else {
        const hashedPassword = await hashPassword(newPassword);
        admin.password = hashedPassword;
      }
    }

    // new username
    if (username !== admin.username) {
      const isUsernameExist = await Admin.findOne({ username });

      if (isUsernameExist) {
        return {
          message: MESSAGES.user_exist,
          status: MESSAGES.failed,
          code: STATUS_CODES.exist,
        };
      } else {
        admin.username = username;
      }
    }

    if (image.length !== 0) {
      admin.avatar = image;
    }

    // updating info
    admin.name = name;
    admin.email = email;
    admin.phoneNumber = phoneNumber;
    admin.address = address;
    admin.country = country;
    await admin.save();

    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: name,
        avatar: image.length !== 0 ? image : admin.avatar,
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

    revalidatePath("/account");

    return {
      message: "Profile Updated",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: STATUS_CODES.server,
    };
  }
};

export const deleteAdmin = async (id) => {
  try {
    await connectDB();

    // delete admin
    await Admin.findByIdAndDelete(id);

    revalidatePath("/account");

    return {
      message: "User Deleted!",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};

export const getAdmin = async (id) => {
  try {
    await connectDB();

    const admin = await Admin.findById(id)
      .populate({
        path: "productsCreated",
        model: Product,
      })
      .populate({
        path: "blogsCreated",
        model: Blog,
      })
      .select("-password")
      .lean();

    if (!admin) {
      throw new Error("No admin found with this ID!");
    }

    return {
      admin,
      message: MESSAGES.success,
      status: MESSAGES.success,
      code: STATUS_CODES.success,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getAdmins = async () => {
  try {
    await connectDB();

    const admins = await Admin.find().select("-password").lean();

    return {
      admins,
      message: "success",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getCurrentAdmin = async () => {
  try {
    await connectDB();

    const session = getServerSession();

    // check session
    if (!session) {
      return {
        message: "Un Authorized",
        status: "failed",
        code: 401,
      };
    }

    const currentAdmin = await Admin.findById(session.userId)
      .select("-password")
      .lean();

    // check admin exist
    if (!currentAdmin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    return {
      currentAdmin,
      message: "success",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const changeRole = async (data) => {
  try {
    await connectDB();

    const { role, userId } = data;

    const otherAdmin = await Admin.findById(userId);

    // check admin exist
    if (!otherAdmin) {
      return {
        message: "Not Found!",
        status: "failed",
        code: 404,
      };
    }

    otherAdmin.roll = role;
    await otherAdmin.save();

    revalidatePath("/account");

    return {
      message: "User Role Updated!",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};
