import Job from "../../models/postgres/job.model.js";

const pgJobRepository = {
  async createJob(jobData) {
    return await Job.create(jobData);
  },

  async getAllJobs(filters = {}) {
    const where = {};

    if (filters.location) {
      where.location = filters.location;
    }

    if (filters.jobType) {
      where.jobType = filters.jobType;
    }

    if (filters.company) {
      where.company = filters.company;
    }

    if (typeof filters.isActive !== "undefined") {
      where.isActive = filters.isActive;
    }

    return await Job.findAll({ where });
  },

  async getJobById(id) {
    return await Job.findByPk(id);
  },

  async updateJob(jobId, updateData) {
    await Job.update(updateData, {
      where: {
        id: jobId,
      },
    });

    return await Job.findByPk(jobId);
  },

  async deleteJob(jobId) {
    return await Job.destroy({
      where: {
        id: jobId,
      },
    });
  },
};

export default pgJobRepository;