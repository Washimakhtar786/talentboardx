import { z } from 'zod';

export const SignupSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['jobseeker', 'employer', 'admin']),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});