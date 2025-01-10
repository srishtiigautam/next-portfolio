import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAbout extends Document {
  photo: string;
  description: string;
  projectsCount: number;
  hoursWorked: number;
  clientsHandled: number;
  awards: number;
}

const AboutSchema: Schema<IAbout> = new mongoose.Schema({
  photo: { type: String, required: true },
  description: { type: String, required: true },
  projectsCount: { type: Number, required: true },
  hoursWorked: { type: Number, required: true },
  clientsHandled: { type: Number, required: true },
  awards: { type: Number, required: true },
});

const About: Model<IAbout> =
  mongoose.models.About || mongoose.model("About", AboutSchema);
export default About;
