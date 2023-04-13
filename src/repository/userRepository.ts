import { userModel } from "../db/models/userModel";
import { User } from "../interfaces/User";

const userRepository = {
  async findUserByEmail(email: string): Promise<User | false | null> {
    try {
      return await userModel.findOne({ email });
    } catch (error) {
      console.error("erreur : ", error);
      return false;
    }
  },
};

export { userRepository };
