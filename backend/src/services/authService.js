import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = "1d";



if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

// Hash Password
export const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
};

// Compare Password
export const comparePassword = async (inputPassword, storedHash) => {
  return await bcrypt.compare(inputPassword, storedHash);
};

// Generate JWT
export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: EXPIRES_IN,
    }
  );
};

// Verify JWT
export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

// Role Check
export const checkRole = (userRole, allowedRoles) => {
  return allowedRoles.includes(userRole);
};