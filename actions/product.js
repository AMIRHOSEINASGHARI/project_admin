"use server";

// models
import { Product } from "@/utils/models/product";
import { Order } from "@/utils/models/order";
import { Like } from "@/utils/models/like";
import { Comment } from "@/utils/models/comment";
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

export const getProducts = async () => {
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

    // check user roll
    if (session.roll === "USER") {
      return {
        message: "Access Denied!",
        status: "failed",
        code: 403,
      };
    }

    const products = await Product.find().lean();

    return {
      products,
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

export const getProduct = async (id) => {
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

    // check user roll
    if (session.roll === "USER") {
      return {
        message: "Access Denied!",
        status: "failed",
        code: 403,
      };
    }

    const product = await Product.findById(id)
      .populate({
        path: "orders.orderId",
        model: Order,
      })
      .populate({
        path: "likes",
        model: Like,
      })
      .populate({
        path: "comments",
        model: Comment,
      })
      .lean();

    return {
      product,
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
