"use server";

// utils
import connectDB from "@/utils/connectDB";
// models
import Admin from "@/utils/models/admin";
import { Blog } from "@/utils/models/blog";
import { Comment } from "@/utils/models/comment";
import { Product } from "@/utils/models/product";
import { User } from "@/utils/models/user";
import Task from "@/utils/models/task";

export const searchDashboard = async (searchQuery) => {
  try {
    await connectDB();

    let query = { $text: { $search: searchQuery } };

    const products = await Product.find(query).lean();
    const blogs = await Blog.find(query).lean();
    const tasks = await Task.find(query)
      .populate({
        path: "createdBy",
        model: Admin,
        select: "username name avatar",
      })
      .lean();
    const users = await User.find(query)
      .select("avatar username displayName")
      .lean();
    const admins = await Admin.find(query).lean();
    const comments = await Comment.find(query)
      .populate({
        path: "senderId",
        model: User,
        select: "username displayName avatar",
      })
      .lean();

    return {
      result: {
        products,
        blogs,
        tasks,
        users,
        admins,
        comments,
        searchQuery,
      },
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
      status: "failed",
      code: 500,
      error,
    };
  }
};
