export default class IApplicationRepository {
  async createApplication(applicationData) {
    throw new Error("Method createApplication() must be implemented");
  }

  async getApplicationById(id) {
    throw new Error("Method getApplicationById() must be implemented");
  }

  async getApplicationsByJob(jobId) {
    throw new Error("Method getApplicationsByJob() must be implemented");
  }

  async getApplicationsByUser(userId) {
    throw new Error("Method getApplicationsByUser() must be implemented");
  }

  async updateApplication(id, updateData) {
    throw new Error("Method updateApplication() must be implemented");
  }

  async deleteApplication(id) {
    throw new Error("Method deleteApplication() must be implemented");
  }
}