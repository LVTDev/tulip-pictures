import mongoose from "mongoose";

export async function dbConnect() {
  const uri = process.env.NEXT_PUBLIC_MONGO_URL;

  if (!uri) {
    throw new Error("Missing MongoDB connection string in environment variables");
  }

  // Avoid multiple connections in dev with hot reload
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(uri, {
    autoIndex: true,
  });
}