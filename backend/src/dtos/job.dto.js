import { z } from "zod";

export const JobCreateSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  location: z.string(),
  jobType: z.enum(["Full-Time", "Part-Time", "Contract"]),
  company: z.string(),

  // Accept both PostgreSQL (number) and MongoDB (ObjectId string)
  postedBy: z.union([
    z.number().int().positive(),
    z.string().min(24).max(24),
  ]),

  skills: z.array(z.string()).optional(),
});

export const JobUpdateSchema = JobCreateSchema.partial();