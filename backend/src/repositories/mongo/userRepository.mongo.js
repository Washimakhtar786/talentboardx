import User from '../../models/mongo/user.model.js';

const mongoUserRepository = {
  async createUser(userData) {
    return await User.create(userData);
  },

  async findUserByEmail(email) {
    return await User.findOne({ email });
  },

  async findUserById(id) {
    return await User.findById(id);
  },
};

export default mongoUserRepository;