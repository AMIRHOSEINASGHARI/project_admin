"use server";

// models
import { Product } from "@/utils/models/product";
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

    const {
      title,
      description,
      image,
      price,
      stock,
      discount,
      category,
      keywords,
      brand,
      published,
    } = data;

    const newProduct = await Product.create({
      title,
      description,
      image,
      price,
      stock,
      discount,
      category,
      keywords,
      brand,
      published,
    });

    return {
      message: "Product Created",
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
