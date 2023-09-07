import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "task-manager",
    });

    if (connection) {
      console.log("Connected to MongoDB");
      console.log("Database Name:", connection.connection.host);
    } else {
      console.log("Failed to connect with database");
    }
  } catch (error) {
    console.error("Failed to connect with database:", error);
  }
};
