import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) return;

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("connected to DB");
};

export default connectDB;
