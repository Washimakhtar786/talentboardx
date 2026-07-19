import { SignupSchema, LoginSchema } from '../dtos/user.dto.js';
import * as userService from '../services/userService.js';

export const signup = async (req, res, next) => {
  try {
    const userData = SignupSchema.parse(req.body);

    const user = await userService.signup(userData);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const credentials = LoginSchema.parse(req.body);

    const result = await userService.login(credentials);

res.status(200).json({
  success: true,
  data: result,
});
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};