"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import Task from "@/utils/models/task";
import Admin from "@/utils/models/admin";

export const createTask = async (data) => {
  try {
    await connectDB();

    const session = getServerSession();

    const { title, description, status, dueDate } = data;

    const newTask = await Task.create({
      title,
      description,
      status,
      createdBy: session.userId,
      dueDate,
    });

    revalidatePath("/tasks");

    return {
      message: "Task Created!",
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

export const getTasks = async () => {
  try {
    await connectDB();

    const tasks = await Task.find()
      .populate({
        path: "createdBy",
        model: Admin,
        select: "username name avatar roll",
      })
      .lean();

    return {
      tasks: {
        todo: tasks?.filter((task) => task.status === "Todo"),
        progress: tasks?.filter((task) => task.status === "Progress"),
        done: tasks?.filter((task) => task.status === "Done"),
      },
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
