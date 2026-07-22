import Application from "../../models/mongo/application.model.js";

const mongoApplicationRepository = {
  async createApplication(applicationData) {
    return await Application.create(applicationData);
  },

  async findByUser(userId) {
    return await Application.find({ userId }).sort({
      createdAt: -1,
    });
  },

  async findById(id) {
    return await Application.findById(id);
  },

  async getApplicationsByJob(jobId) {
    return await Application.find({ jobId }).sort({
      createdAt: -1,
    });
  },

  async updateApplicationStatus(applicationId, status) {
    return await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );
  },
};

export default mongoApplicationRepository;