import * as jobService from '../services/jobService.js';

export const createJob = async (req, res, next) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

export const getJobs = async (req, res, next) => {
  try {
    const jobs = await jobService.getJobs(req.query);
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};
