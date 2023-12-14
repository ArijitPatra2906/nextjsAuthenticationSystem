import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arijit:arijit@cluster0.llqcyfx.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`the db is connect with ${mongoose.connection.host}`);
  } catch (error) {
    mongoose.disconnect();
    process.exit(1);
  }
};
