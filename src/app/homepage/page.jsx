import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Home: Task Manager",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* Welcome Banner */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl">Welcome to Task Manager</h1>
        <p className="mt-4 text-xl text-gray-600">
          Simplify your task management with our powerful tools.
        </p>
      </section>

      {/* Feature Section */}
      <section className="mb-16">
        <h2 className="mb-4 text-3xl font-semibold text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Task Tracking</h3>
            <p className="text-gray-600">
              Easily track and manage your tasks with our intuitive interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Collaboration</h3>
            <p className="text-gray-600">
              Collaborate with your team members and assign tasks efficiently.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Priority Management</h3>
            <p className="text-gray-600">
              Set priorities for tasks and focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Get Started Today</h2>
        <p className="text-gray-600">
          Join thousands of users who have improved their task management with
          Task Manager.
        </p>
        <button className="px-6 py-3 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Sign Up Now
        </button>
      </section>

      {/* Testimonial Section */}
      <section className="text-center">
        <h2 className="mb-4 text-3xl font-semibold">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <p className="mb-2 text-gray-600">
              Task Manager has made my life so much easier. I can stay organized
              and on top of my tasks.
            </p>
            <p className="text-gray-400">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <p className="mb-2 text-gray-600">
              I love the collaboration features. Its perfect for our teams
              workflow.
            </p>
            <p className="text-gray-400">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 border rounded-lg shadow-lg">
            <p className="mb-2 text-gray-600">
              Task Manager has helped me stay organized and focused on my goals.
            </p>
            <p className="text-gray-400">- Alex Johnson</p>
          </div>
        </div>
      </section>
    </main>
  );
}
