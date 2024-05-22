import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "todo" },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
  assignees: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  dueDate: { type: Date, required: true, default: () => Date.now() },
  lables: { type: [String], default: [] },
  subTasks: {
    type: [
      {
        title: String,
        status: String,
      },
    ],
    default: [],
  },
});

const Task = models?.Task || model("Task", taskSchema);

export default Task;
