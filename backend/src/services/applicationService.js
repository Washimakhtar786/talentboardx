import { applicationRepository } from '../repositories/index.js';

// Later we'll call AI microservice here too

export const applyToJob = async ({
  userId,
  jobId,
  resumePath,
}) => {
  return await applicationRepository.createApplication({
    jobId,
    userId,
    resumePath,
    status: 'submitted',
    aiMatchScore: null,
    aiFeedback: null,
  });
};

export const getApplicationsByUser = async (userId) => {
  return await applicationRepository.findByUser(userId);
};

export const getApplicationById = async (id) => {
  return await applicationRepository.findById(id);
};