// next
import { NextResponse } from "next/server";
// utils
import connectDB from "@/utils/connectDB";
// models
import Admin from "@/utils/models/admin";
import Task from "@/utils/models/task";

export async function GET(req, { params: { id } }) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  try {
    const task = await Task.findById(id)
      .populate({
        path: "createdBy",
        model: Admin,
        select: "username name avatar",
      })
      .lean();

    return NextResponse.json(
      { msg: "Success", success: true, task },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
