import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    telNumber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    realEstate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["vila", "apartment", "store", "commercial", "land"],
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Posts = models.posts || model("posts", postSchema);

export default Posts;
