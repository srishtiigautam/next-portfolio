import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  thumbnail: string;
  projectLink: string;
  projectName: string;
  description: string;
  isUiUx: boolean;
}

const ProjectSchema: Schema<IProject> = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  projectLink: { type: String, required: true },
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  isUiUx: { type: Boolean, default: false },
});

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;
