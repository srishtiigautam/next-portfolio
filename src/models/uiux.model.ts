import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the UI/UX model
interface IUIUX extends Document {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the UI/UX model
const UIUXSchema: Schema<IUIUX> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String, // URL or file path for the thumbnail image
      required: true,
    },
    link: {
      type: String, // Link to the project or more details
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the model
const UIUX = mongoose.models.UIUX || mongoose.model<IUIUX>("UIUX", UIUXSchema);
export default UIUX;
