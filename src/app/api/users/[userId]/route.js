import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      {
        message: "Error in finding the user in the database",
        success: false,
      },
      { status: 500 }
    );
  }
};

//deleteUser
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User deleted successfuly",
      status: true,
    });
  } catch (error) {}
  return NextResponse.json({
    message: "Error in deletting User!!",
    success: false,
  });
}

//update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { username, password, about, profileUrl } = await request.json();

  try {
    const user = await User.findById(userId);

    if (!user) {
      // Handle the case where the user is not found
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 404 }
      );
    }

    user.username = username;
    user.about = about;
    user.password = password;
    user.profileUrl = profileUrl;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to update user",
        success: false,
      },
      { status: 500 }
    );
  }
}
