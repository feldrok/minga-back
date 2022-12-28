import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ranking: {
      type: Number,
    },
    examples: [
      {
        type: String,
      },
    ],
    details: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
)

export const Category = mongoose.model("Category", categorySchema)
