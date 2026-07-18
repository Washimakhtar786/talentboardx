import { jobRepository } from '../repositories/index.js';

export const createJob = async (jobData) => {
  return await jobRepository.createJob(jobData);
};

export const getJobs = async (filters) => {
  return await jobRepository.getAllJobs(filters);
};

export const getJobById = async (id) => {
  return await jobRepository.getJobById(id);
};

export const updateJob = async (id, updateData) => {
  return await jobRepository.updateJob(id, updateData);
};

export const deleteJob = async (id) => {
  return await jobRepository.deleteJob(id);
};
