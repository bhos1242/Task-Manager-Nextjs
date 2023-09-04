"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assets/undraw_project_completed_re_jr7u.svg";
export const metadata = {
  title: "Add Task: Task Manager",
};

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    //validate task data
  };
  return (
    <div className="grid grid-cols-12 p-4 mx-auto bg-black">
      <div className="md:col-span-6 col-span-12 md:col-start-4 p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center my-y">
          <Image src={loginSvg} style={{ width: "50%" }} alt="login image" />
        </div>
        <h1 className="mb-6 text-xl mt-3 font-semibold text-center">
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
          {JSON.stringify(task)}
        </form>
      </div>
    </div>
  );
};

export default AddTask;