import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Home: Task Manager",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <h1 className="text-5xl">Welcome to Task Manager</h1>
      </div>
    </main>
  );
}
