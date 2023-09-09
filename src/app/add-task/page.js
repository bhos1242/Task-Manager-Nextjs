"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assets/undraw_project_completed_re_jr7u.svg";
import { addTask } from "@/services/taskService";
import toast, { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Add Task:Task Manager",
};
const AddTask = () => {
  document.title = metadata.title;
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64fb154350610fff3684fd2d",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    //validate task data
    try {
      const result = addTask(task);

      toast.success("Task Added successfully");

      console.log(result);

      setTask({
        title: "",
        content: "",
        status: "",
        userId: "",
      });
    } catch (error) {
      toast.error("Failed to add task");
      console.log(error);
    }
  };

  const notify = () => toast("Here is your toast.");
  return (
    <div className="grid grid-cols-12 p-4 mx-auto ">
      <div className="col-span-12 p-6 bg-white rounded-lg shadow-md md:col-span-6 md:col-start-4">
        <div className="flex justify-center my-y">
          <Image src={loginSvg} style={{ width: "50%" }} alt="login image" />
        </div>
        <h1 className="mt-3 mb-6 text-xl font-semibold text-center">
          Add Your Task Here
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Task title */}
          <div className="mb-4">
            <label htmlFor="task_title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter task title"
              name="task_title"
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              value={task.title}
            />
          </div>

          {/* Task content */}
          <div className="mb-6">
            <label htmlFor="task_content" className="block text-gray-700">
              Content
            </label>
            <textarea
              id="task_content"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={5}
              placeholder="Enter task content"
              name="task_content"
              onChange={(e) => setTask({ ...task, content: e.target.value })}
              value={task.content}
            />
          </div>
          {/* Task status */}
          <div className="mb-6">
            <label htmlFor="task_status" className="block text-gray-700">
              Status
            </label>
            <select
              name="task_status"
              id="task_status"
              className="w-full px-4 py-2 text-gray-400 rounded-md"
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              value={task.status}
            >
              <option value="none" disabled className="px-4 py-2 text-gray-400">
                ----Select Status-----
              </option>
              <option value="Completed" className="px-4 py-2 text-gray-400">
                Completed
              </option>
              <option value="Pending" className="px-4 py-2 text-gray-400">
                Pending
              </option>
            </select>
          </div>

          {/* Submit button */}
          <div className="space-x-2 text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Task
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Clear
            </button>
          </div>
        </form>
        <div>
          <button onClick={notify}>Make me a toast</button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
