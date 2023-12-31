const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    messageEmail: { type: String },
    phone: { type: String },
    gender: { type: Boolean },
    mssv: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
