"use server";

// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { User } from "@/utils/models/user";
import { Order } from "@/utils/models/order";
import { Comment } from "@/utils/models/comment";
import { Like } from "@/utils/models/like";
import { Product } from "@/utils/models/product";
import { Blog } from "@/utils/models/blog";

export const getUsers = async () => {
  try {
    await connectDB();

    const users = await User.find().select("-password").lean();

    return {
      users,
      message: "success",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    await connectDB();

    const user = await User.findById(id)
      .select("-password")
      .populate({
        path: "orders",
        model: Order,
      })
      .populate({
        path: "comments",
        model: Comment,
        populate: {
          path: "productId",
          model: Product,
          select: "_id",
        },
      })
      .populate({
        path: "likes",
        model: Like,
        populate: {
          path: "product",
          model: Product,
          select: "image title",
        },
      })
      .populate({
        path: "likes",
        model: Like,
        populate: {
          path: "blog",
          model: Blog,
          select: "image title",
        },
      })
      .lean();

    return {
      user,
      message: "success",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
