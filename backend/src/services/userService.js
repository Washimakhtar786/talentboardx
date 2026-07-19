import { userRepository } from '../repositories/index.js';
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "./authService.js";
export const signup = async (data) => {
  const existing = await userRepository.findUserByEmail(data.email);

  if (existing) {
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await userRepository.createUser({
    ...data,
    password: hashedPassword,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

export const login = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const valid = await comparePassword(password, user.password);

  if (!valid) {
    throw new Error('Invalid credentials');
  }

  return generateToken(user);
};

export const getUserById = async (id) => {
  const user = await userRepository.findUserById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};