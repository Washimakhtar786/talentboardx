import Application from "../../models/postgres/application.model.js";

const pgApplicationRepository = {
  async createApplication(applicationData) {
    return await Application.create(applicationData);
  },

  async findByUser(userId) {
    return await Application.findAll({
      where: {
        userId,
      },
    });
  },

  async findById(id) {
    return await Application.findByPk(id);
  },

  async getApplicationsByJob(jobId) {
    return await Application.findAll({
      where: {
        jobId,
      },
    });
  },

  async updateApplicationStatus(applicationId, status) {
    await Application.update(
      {
        status,
      },
      {
        where: {
          id: applicationId,
        },
      }
    );

    return await Application.findByPk(applicationId);
  },
};

export default pgApplicationRepository;