export default class IJobRepository {
  async createJob(jobData) {
    throw new Error("Method createJob() must be implemented");
  }

  async getAllJobs(filters) {
    throw new Error("Method getAllJobs() must be implemented");
  }

  async getJobById(id) {
    throw new Error("Method getJobById() must be implemented");
  }

  async updateJob(jobId, updateData) {
    throw new Error("Method updateJob() must be implemented");
  }

  async deleteJob(jobId) {
    throw new Error("Method deleteJob() must be implemented");
  }
}