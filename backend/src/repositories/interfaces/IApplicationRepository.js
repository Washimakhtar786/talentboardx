export default class IApplicationRepository {
  async createApplication(applicationData) {
    throw new Error("Method createApplication() must be implemented");
  }

  async findByUser(userId) {
    throw new Error("Method findByUser() must be implemented");
  }

  async findById(id) {
    throw new Error("Method findById() must be implemented");
  }

  async getApplicationsByJob(jobId) {
    throw new Error("Method getApplicationsByJob() must be implemented");
  }

  async updateApplicationStatus(applicationId, status) {
    throw new Error(
      "Method updateApplicationStatus() must be implemented"
    );
  }
}