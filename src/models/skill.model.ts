import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISkill extends Document {
  name: string;
  proficiency: number;
}

const SkillSchema: Schema<ISkill> = new mongoose.Schema({
  name: { type: String, required: true },
  proficiency: { type: Number, required: true },
});

const Skill: Model<ISkill> =
  mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
export default Skill;
