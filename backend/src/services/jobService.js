import { jobRepository } from '../repositories/index.js';

export const createJob = async (data) => {
  return await jobRepository.createJob(data);
};

export const getJobs = async (filters) => {
  return await jobRepository.getAllJobs(filters);
};

export const getJobById = async (id) => {
  return await jobRepository.getJobById(id);
};

export const updateJob = async (id, data) => {
  return await jobRepository.updateJob(id, data);
};

export const deleteJob = async (id) => {
  return await jobRepository.deleteJob(id);
};