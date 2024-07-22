"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
// models
import { Order } from "@/utils/models/order";
import { Product } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export const getOrders = async () => {
  try {
    await connectDB();

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
    throw new Error(error);
  }
};

export const getOrder = async (id) => {
  try {
    await connectDB();

    const order = await Order.findById(id)
      .populate({
        path: "userId",
        model: User,
        select: "-password -likes -comments -cart",
      })
      .populate({
        path: "items.productId",
        model: Product,
      })
      .lean();

    return {
      order,
      message: "success",
      status: "success",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const updateOrderStatus = async (data) => {
  try {
    await connectDB();

    const { id, action } = data;

    const order = await Order.findById(id);

    if (action === "Completed") {
      order.status = "Completed";
    } else {
      order.status = "Pending";
    }
    await order.save();

    revalidatePath("/orders");

    return {
      message: "Process finished!",
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
