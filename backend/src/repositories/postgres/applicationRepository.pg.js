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
      order: [["createdAt", "DESC"]],
    });
  },

  async findById(id) {
    return await Application.findByPk(id);
  },
};

export default pgApplicationRepository;