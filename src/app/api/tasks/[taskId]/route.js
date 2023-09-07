import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return NextResponse.json(
        { message: "Task Not found", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error("Error in getting task:", error);
    return NextResponse.json({
      message: "Error in getting task",
      status: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, content, status } = await request.json(); // You missed 'await' here

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return NextResponse.json(
        { message: "Task Not found", status: false },
        { status: 404 }
      );
    }

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save(); // You missed 'await' here

    return NextResponse.json(updatedTask, {
      message: "Task updated successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error in updating the task:", error);
    return NextResponse.json({
      message: "Error in updating the task",
      status: false,
    });
  }
}

export async function DELETE() {}
