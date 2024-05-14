"use server";

// models
import { Product } from "@/utils/models/product";
import { Order } from "@/utils/models/order";
import { Comment } from "@/utils/models/comment";
import { User } from "@/utils/models/user";
// utils
import connectDB from "@/utils/connectDB";
import { MESSAGES, STATUS_CODES } from "@/utils/messages";
import { getServerSession } from "@/utils/session";

export const createProduct = async (data) => {
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

    // check user roll
    if (session.roll === "USER") {
      return {
        message: MESSAGES.forbidden,
        status: MESSAGES.failed,
        code: STATUS_CODES.forbidden,
      };
    }

    console.log(data);

    const {
      title,
      description,
      images,
      price,
      stock,
      discount,
      category,
      keywords,
      brand,
    } = data;

    await Product.create({
      title,
      description,
      images,
      price,
      stock,
      discount,
      category,
      keywords,
      brand,
    });

    return {
      message: "Product Created",
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
