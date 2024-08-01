import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    userId: String,
    userFirstName: String,
    userLastName: String,
    imageUrl: String,
    title: String,
    description: String,
    tags: { type: [String], required: true },
    likes: Number,
    javaCode: String,
    cppCode: String,
    jsCode: String,
    pythonCode: String,
  },
  {
    timestamps: true,
  }
);

const BlogPostModel =
  mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);

export default BlogPostModel;
