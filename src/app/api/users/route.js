import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcrypt from "bcryptjs";
connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse({
      message: "No users found",
      status: false,
    });
  }

  return NextResponse.json(users);
}

// POST
export async function POST(request) {
  // Parse JSON data from the request

  const { username, email, password, about, profileUrl } = await request.json();
  // Create a new user object
  const user = new User({
    username,
    email,
    password,
    about,
    profileUrl,
  });

  try {
    // Parse JSON data from the request
    const saltRounds = 10; // Number of rounds for salt generation
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);

    // Save the user object to the database
    const createdUser = await user.save();

    return NextResponse.json(createdUser, {
      status: 201,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
