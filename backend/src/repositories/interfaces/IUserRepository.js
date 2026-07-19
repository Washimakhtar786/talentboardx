export default class IUserRepository {
  async createUser(userData) {
    throw new Error("Method createUser() must be implemented");
  }

  async findUserByEmail(email) {
    throw new Error("Method findUserByEmail() must be implemented");
  }

  async findUserById(id) {
    throw new Error("Method findUserById() must be implemented");
  }

  async updatePassword(userId, hashedPassword) {
    throw new Error("Method updatePassword() must be implemented");
  }
}