import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(
  "mongodb+srv://pavithrarmp19_db_user:Pavithra123@cluster0.haz8xu7.mongodb.net/smart-access"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});