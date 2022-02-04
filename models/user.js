const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },

    secret: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },

    about: {},
    image: {
      url: String,
      public_id: String,
    },
    following: [{ type: ObjectId, ref: "User" }],
    followers: [{ type: ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
