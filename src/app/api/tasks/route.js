import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();
//get all the tasks
// Get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();

    if (tasks.length === 0) {
      return NextResponse.json(
        {
          message: "No tasks found",
          status: false,
        },
        { status: 404 } // Return a 404 status code when no tasks are found
      );
    }

    return NextResponse.json(
      tasks,
      {
        message: "Tasks retrieved successfully",
        status: true,
      },
      { status: 200 } // Use a 200 status code for a successful GET request
    );
  } catch (error) {
    console.error("Error while fetching tasks:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        status: false,
      },
      { status: 500 } // Return a 500 status code for internal server errors
    );
  }
}

//create task
// Create task
export async function POST(request) {
  const { title, content, userId, status } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
      status,
    });

    const createdTask = await task.save(); // Save the new task to the database
    return NextResponse.json(
      {
        message: "Task added successfully",
        status: true,
      },
      { status: 201 } // Use a valid status code like 201 (Created) for a successful POST request
    );
  } catch (error) {
    console.error("Error while creating task:", error);
    return NextResponse.json({
      message: "Failed to add task",
      status: false,
    });
  }
}

//
