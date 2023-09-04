import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request) {
  const users = [
    {
      name: "vivek Bhos",
      phone: "9022738129",
      course: "nextjs",
    },
    {
      name: "Gandu yuvraj",
      phone: "542132",
      course: "handjob",
    },
  ];
  return NextResponse.json(users);
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted!",
      status: true,
    },
    { status: 201, statusText: "Ok" }
  );
}
