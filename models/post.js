const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const postSchema = new Schema(
  {
    content: {
      type: {},
      required: true,
    },

    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    image: {
      url: String,
      public_id: String,
    },

    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
