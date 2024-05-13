"use server";

// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
import { hashPassword, verifyPassword } from "@/utils/functions";
// models
import Admin from "@/utils/models/admin";
import { getServerSession } from "@/utils/session";

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
      avatar,
    } = data;

    const session = getServerSession();

    if (!session) {
      return {
        message: MESSAGES.unAuthorized,
        status: MESSAGES.failed,
        code: STATUS_CODES.unAuthorized,
      };
    }

    const admin = await Admin.findById(session.userId);

    if (!admin) {
      return {
        message: MESSAGES.userNotFound,
        status: MESSAGES.failed,
        code: STATUS_CODES.not_found,
      };
    }

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
        admin.password === hashedPassword;
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
        admin.username === username;
      }
    }

    admin.email === email;
    admin.phoneNumber === phoneNumber;
    admin.address === address;
    admin.avatar === avatar;
    admin.country === country;
    // TODO: avatar
    await admin.save();

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
