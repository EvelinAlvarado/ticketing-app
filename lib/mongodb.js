import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToMongoDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "tickify_session",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error connecting to MongoDB:", error);
    }
    throw error;
  }
};
