import Application from '../../models/mongo/application.model.js';

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
};

export default mongoApplicationRepository;