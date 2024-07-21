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

    const admin = await Admin.findById(session.userId);
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

    admin.productsCreated.push(newProduct._id);
    await admin.save();

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

    const { page, search, stock, discount, sort, category, published } =
      searchParams;

    let query = {};
    let filters = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (stock) {
      stock == "in-stock" ? (filters.stock = { $gt: 0 }) : (filters.stock = 0);
    }
    // product discount filter
    if (discount) {
      discount == "has-discount"
        ? (filters.discount = { $gt: 0 })
        : (filters.discount = 0);
    }
    // product category filter
    if (category) {
      filters.category = category;
    }
    // product publish status filter
    if (published) {
      published === "true"
        ? (filters.published = true)
        : (filters.published = false);
    }

    const pageNumber = page || 1;
    const perPage = 5;
    const totalProductsWithoutFilter = await Product.countDocuments();
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
      totalProducts,
      totalProductsWithoutFilter,
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

export const changeProductStatus = async (data) => {
  try {
    await connectDB();

    const { id, published } = data;

    const product = await Product.findById(id);

    product.published = !published;
    await product.save();

    revalidatePath("/products");

    return {
      message: "Updated!",
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
