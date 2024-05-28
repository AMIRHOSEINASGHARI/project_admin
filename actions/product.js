"use server";

// next
import { revalidatePath } from "next/cache";
// models
import { Product } from "@/utils/models/product";
import { Order } from "@/utils/models/order";
import { Like } from "@/utils/models/like";
import { User } from "@/utils/models/user";
import { Comment } from "@/utils/models/comment";
import Admin from "@/utils/models/admin";
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
      createdBy: session.userId,
    });

    revalidatePath("/products");

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

export const getProducts = async (searchParams) => {
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

    const { page, search, has_selling_stock, has_discount, sort, category } =
      searchParams;

    let query = {};
    let filters = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (has_selling_stock) {
      filters.stock = { $gt: 0 };
    }
    // product discount filter
    if (has_discount) {
      has_discount == 1
        ? (filters.discount = { $gt: 0 })
        : (filters.discount = 0);
    }
    // product category filter
    if (category) {
      filters.category = category;
    }

    const pageNumber = page || 1;
    const perPage = 8;
    const totalProducts = await Product.countDocuments({
      ...query,
      ...filters,
    });
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await Product.find({ ...filters, ...query })
      .sort({
        ...(sort == 1
          ? { createdAt: -1 }
          : sort == 2
          ? { createdAt: 1 }
          : sort == 3
          ? { price: -1 }
          : sort == 4
          ? { price: 1 }
          : sort == 5
          ? { orders: -1 }
          : {}),
      })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .populate({
        path: "createdBy",
        model: Admin,
        select: "username name avatar",
      })
      .lean();

    return {
      products,
      totalPages,
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
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
        populate: {
          path: "user",
          model: User,
          select: "username displayName avatar",
        },
      })
      .populate({
        path: "comments",
        model: Comment,
        populate: {
          path: "senderId",
          model: User,
          select: "-password",
        },
      })
      .populate({
        path: "createdBy",
        model: Admin,
        select: "username name avatar",
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
