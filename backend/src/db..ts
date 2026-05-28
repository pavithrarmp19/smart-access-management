import mongoose from 'mongoose';

export const connectDB = async () => {

  try {

await mongoose.connect(
    'mongodb+srv://pavithrarmp19_db_user:H9QNWfJDDwT9zdA0@cluster0.haz8xu7.mongodb.net/'
);
    console.log("MongoDB Connected Successfully");

  } catch (error) {

    console.log("MongoDB Connection Failed", error);

  }
};