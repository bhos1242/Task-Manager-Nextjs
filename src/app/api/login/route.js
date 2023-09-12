import { User } from "@/models/userModel";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Corrected the import statement for JWT

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      throw new Error("User not found");
    }

    const matchPass = bcrypt.compareSync(password, user.password);
    if (!matchPass) {
      throw new Error("Password not matched!!");
    }

    // Generate a token
    const token = jwt.sign(
      { _id: user._id, name: user.username },
      process.env.JWT_TOKEN
    );

    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      // httpOnly: true,
    });

    return response; // Return the token upon successful login
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
