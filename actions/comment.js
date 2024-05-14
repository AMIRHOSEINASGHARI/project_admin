"use server";

import connectDB from "@/utils/connectDB";
import { Comment } from "@/utils/models/comment";
import { getServerSession } from "@/utils/session";

export const publishCommentStatus = async (id, action) => {
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

    const comment = await Comment.findById(id);

    if (action === "publish") {
      comment.published = true;
      await comment.save();
    } else if (action === "draft") {
      comment.published = false;
      await comment.save();
    }

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
