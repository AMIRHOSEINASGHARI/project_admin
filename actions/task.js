"use server";

// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import Task from "@/utils/models/task";

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
