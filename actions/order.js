"use server";

// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Order } from "@/utils/models/order";
import { Product } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export const getOrders = async () => {
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

    const orders = await Order.find()
      .populate({
        path: "userId",
        model: User,
      })
      .populate({
        path: "items.productId",
        model: Product,
      })
      .lean();

    return {
      orders,
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
