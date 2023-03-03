import mongoose, { Schema } from "mongoose";
import { User } from "../../interfaces/User";

const userSchema = new Schema<User>({
  email: String,
  password: String,
  salt: String,
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
