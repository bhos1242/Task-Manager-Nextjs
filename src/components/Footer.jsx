import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 text-white bg-blue-500">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="mb-4 text-2xl font-semibold">Task Manager</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            mollitia.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="mb-4 text-2xl">Important Links</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">Twitter</Link>
            </li>
            <li>
              <Link href="/">Snapchat</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="mb-4 text-2xl">Contact Us</h1>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@workmanager.com">info@taskmanager.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+123456789">9022738129</a>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h1 className="mb-4 text-2xl">Address</h1>
          <p className="text-sm">
            1234 Elm Street
            <br />
            Pune, Maharashtra 12345
            <br />
            Country
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
