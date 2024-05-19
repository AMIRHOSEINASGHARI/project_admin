"use server";

// next
import { revalidatePath } from "next/cache";
// utils
import connectDB from "@/utils/connectDB";
import { getServerSession } from "@/utils/session";
// models
import { Comment } from "@/utils/models/comment";
import { Product } from "@/utils/models/product";
import { User } from "@/utils/models/user";

export const getComments = async () => {
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

    const comments = await Comment.find()
      .populate({
        path: "productId",
        model: Product,
        select: "image title",
      })
      .populate({
        path: "senderId",
        model: User,
        select: "avatar username displayName",
      });

    return {
      comments,
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

export const deleteComment = async (data) => {
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

    const { _id: commentId } = data;

    const comment = await Comment.findByIdAndDelete(commentId);
    const product = await Product.findById(comment.productId);
    const user = await User.findById(comment.senderId);

    const product_comment_index = product.comments.findIndex((item) =>
      item.equals(commentId)
    );
    const user_comment_index = user.comments.findIndex((item) =>
      item.equals(commentId)
    );

    product.comments.splice(product_comment_index, 1);
    await product.save();
    user.comments.splice(user_comment_index, 1);
    await user.save();

    revalidatePath("/products");
    revalidatePath("/comments");

    return {
      message: "Comment Deleted!",
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
