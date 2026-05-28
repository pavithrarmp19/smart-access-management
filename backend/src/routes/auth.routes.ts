import express from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const SECRET_KEY = "smart-access-key";

/* REGISTER */
router.post("/register", async (req, res) => {

  const { userId, password, role } = req.body;

  try {

    const existing = await User.findOne({ userId });

    if (existing) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userId,
      password: hashedPassword,
      role
    });

    await newUser.save();

    return res.json({
      success: true,
      message: "Registered Successfully"
    });

  } catch (error) {

    console.log(error);

    return res.json({
      success: false,
      message: "Server Error"
    });
  }
});

/* LOGIN */
 router.post("/login", async (req, res) => {

  try {

    const { userId, password, role } = req.body;

    console.log("LOGIN REQUEST:", req.body);

    const user = await User.findOne({
      userId,
      role
    });

    console.log("FOUND USER:", user);

    // USER NOT FOUND
    if (!user) {

      return res.json({
        success: false,
        message: "Invalid User ID or Role"
      });
    }

    // PASSWORD CHECK
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.json({
        success: false,
        message: "Invalid Password"
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        userId: user.userId,
        role: user.role
      },
      SECRET_KEY,
      {
        expiresIn: "1h"
      }
    );

    // SUCCESS
    return res.json({
      success: true,
      token,
      user
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
  
});
router.get("/clear-users", async (req, res) => {

  await User.deleteMany({});

  res.json({
    success: true,
    message: "All users deleted"
  });

});
export default router;