"use server";

import connectDB from "@/utils/connectDB";
import { Comment } from "@/utils/models/comment";
import { getServerSession } from "@/utils/session";
import { revalidatePath } from "next/cache";

export const publishCommentStatus = async (data) => {
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

    const { _id, action } = data;

    const comment = await Comment.findById(_id);

    if (action === "publish") {
      comment.published = true;
      await comment.save();
    } else if (action === "draft") {
      comment.published = false;
      await comment.save();
    }

    revalidatePath("/products");

    return {
      message: "Status changed!",
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

export const changeCommentAnswerStatus = async (data) => {
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

    const { _id, value } = data;

    const comment = await Comment.findById(_id);

    comment.answer = value;

    if (value.length !== 0) {
      comment.status = "Answered";
    } else {
      comment.status = "Not-Answered";
    }

    await comment.save();

    revalidatePath("/products");

    return {
      message: "Answered changed!",
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
