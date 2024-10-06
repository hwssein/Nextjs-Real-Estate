import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
  },

  password: {
    type: String,
    required: true,
    minLength: 4,
  },

  createdAt: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
