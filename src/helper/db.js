import mongoose from "mongoose";
import { User } from "../models/userModel";
export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "task-manager",
    });

    if (connection) {
      console.log("Connected to MongoDB");
      console.log("Database Name:", connection.connection.host);

      const user = new User({
        username: "testname",
        email: "test@gmail.com",
        password: "testpassword",
        about: "This is testing",
      });

      await user.save();
      console.log("User created");
    } else {
      console.log("Failed to connect with database");
    }
  } catch (error) {
    console.error("Failed to connect with database:", error);
  }
};
