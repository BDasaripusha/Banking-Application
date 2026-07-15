import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    accountNumber: {
      type: String,
      unique: true,
      required: true
    },

    balance: {
      type: Number,
      default: 50000
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);
