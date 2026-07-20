import User from "../../models/postgres/user.model.js";

const pgUserRepository = {
  async createUser(userData) {
    return await User.create(userData);
  },

  async findUserByEmail(email) {
    return await User.findOne({
      where: { email },
    });
  },

  async findUserById(id) {
    return await User.findByPk(id);
  },

  async updatePassword(userId, hashedPassword) {
    await User.update(
      { password: hashedPassword },
      {
        where: { id: userId },
      }
    );

    return await User.findByPk(userId);
  },
};

export default pgUserRepository;