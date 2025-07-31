import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generatetoken.js";

// Registration
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check for missing details
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // make dbcall for registration

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Registrtion Failed",
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check for missing details
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // make db call

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }

    generateToken(res, user, `Welcome back ${user.name}`)


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
};
