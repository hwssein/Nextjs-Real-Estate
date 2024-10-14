import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState) return;

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log("can not connect to DB\n", error);
  }
};

export default connectDB;
