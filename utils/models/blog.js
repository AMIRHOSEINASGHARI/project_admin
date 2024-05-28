// mongoose
import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  keywords: { type: [String], default: [] },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
  published: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Blog = models?.Blog || model("Blog", blogSchema);
