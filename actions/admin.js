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
// actions
import { signOut } from "./auth";
// models
import Admin from "@/utils/models/admin";
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

    const session = getServerSession();

    // check session
    if (!session) {
      return {
        message: MESSAGES.unAuthorized,
        status: MESSAGES.failed,
        code: STATUS_CODES.unAuthorized,
      };
    }

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

    // updating info
    admin.email = email;
    admin.phoneNumber = phoneNumber;
    admin.address = address;
    admin.avatar = image;
    admin.country = country;
    await admin.save();

    const accessToken = sign(
      {
        username,
        userId: admin._id,
        name: name,
        avatar: image,
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

    const session = getServerSession();

    // check session
    if (!session) {
      return {
        message: MESSAGES.unAuthorized,
        status: MESSAGES.failed,
        code: STATUS_CODES.unAuthorized,
      };
    }

    const currentAdmin = await Admin.findById(id);

    // check admin role
    if (currentAdmin.roll === "USER") {
      return {
        message: MESSAGES.forbidden,
        status: MESSAGES.failed,
        code: STATUS_CODES.forbidden,
      };
    }

    // delete admin
    await Admin.findByIdAndDelete(id);
    signOut();

    return {
      message: MESSAGES.delete,
      status: MESSAGES.success,
      code: STATUS_CODES.updated,
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

export const getAdmin = async (id) => {
  try {
    await connectDB();

    const session = getServerSession();

    // check session
    if (!session) {
      return {
        message: MESSAGES.unAuthorized,
        status: MESSAGES.failed,
        code: STATUS_CODES.unAuthorized,
      };
    }

    const admin = await Admin.findById(id).select("-password").lean();

    // check admin exist
    if (!admin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    return {
      admin,
      message: MESSAGES.success,
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
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
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
    return {
      message: "Server Error!",
      status: "failed",
      code: 500,
    };
  }
};

export const changeRole = async (data) => {
  try {
    await connectDB();

    const { role, id } = data;

    const session = getServerSession();

    // check session
    if (!session) {
      return {
        message: MESSAGES.unAuthorized,
        status: MESSAGES.failed,
        code: STATUS_CODES.unAuthorized,
      };
    }

    const currentAdmin = await Admin.findById(session.userId);

    // check admin role
    if (currentAdmin.roll !== "OWNER") {
      return {
        message: MESSAGES.forbidden,
        status: MESSAGES.failed,
        code: STATUS_CODES.forbidden,
      };
    }

    const otherAdmin = await Admin.findById(id);

    // check admin exist
    if (!otherAdmin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

    otherAdmin.roll = role;
    await otherAdmin.save();

    return {
      message: MESSAGES.update,
      status: MESSAGES.success,
      code: STATUS_CODES.updated,
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
