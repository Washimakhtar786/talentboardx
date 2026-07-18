import { z } from 'zod';

export const JobCreateSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  location: z.string(),
  jobType: z.enum(['Full-Time', 'Part-Time', 'Contract']),
  company: z.string(),
  postedBy: z.string().min(5),
  skills: z.array(z.string()).optional(),
});

export const JobUpdateSchema = JobCreateSchema.partial();
