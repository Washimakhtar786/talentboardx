import { JobCreateSchema, JobUpdateSchema } from '../dtos/job.dto.js';
import * as jobService from '../services/jobService.js';

export const createJob = async (req, res, next) => {
  try {
    const jobData = JobCreateSchema.parse(req.body);

    const createdJob = await jobService.createJob({
      ...jobData,
      postedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: createdJob,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await jobService.getJobs(req.query);

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (req, res, next) => {
  try {
    const job = await jobService.getJobById(req.params.id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const updateData = JobUpdateSchema.parse(req.body);

    const updatedJob = await jobService.updateJob(
  req.params.id,
  updateData,
  req.user
);

    res.status(200).json({
      success: true,
      data: updatedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    await jobService.deleteJob(
  req.params.id,
  req.user
);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};