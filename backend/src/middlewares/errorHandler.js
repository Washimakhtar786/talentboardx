import { logError } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  logError(err);

  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  if (err.name === 'ZodError') {
    const issues = err.issues || err.errors || [];

    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: issues.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  return res.status(status).json({
    success: false,
    message,
  });
};