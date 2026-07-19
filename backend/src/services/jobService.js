import { jobRepository } from "../repositories/index.js";
import { createError } from "../utils/customError.js";

// Create Job
export const createJob = async (data) => {
  return await jobRepository.createJob(data);
};

// Get All Jobs with Filters
export const getJobs = async (filters) => {
  return await jobRepository.getAllJobs(filters);
};

// Get Single Job
export const getJobById = async (id) => {
  const job = await jobRepository.getJobById(id);

  if (!job) {
    throw createError("Job not found", 404);
  }

  return job;
};

// Update Job
export const updateJob = async (id, data) => {
  const job = await jobRepository.getJobById(id);

  if (!job) {
    throw createError("Job not found", 404);
  }

  return await jobRepository.updateJob(id, data);
};

// Delete Job
export const deleteJob = async (id) => {
  const job = await jobRepository.getJobById(id);

  if (!job) {
    throw createError("Job not found", 404);
  }

  return await jobRepository.deleteJob(id);
};