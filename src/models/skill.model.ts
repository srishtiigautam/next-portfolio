// TypeScript Types
export type SkillCategory = 'programming' | 'design' | 'webdev';

export interface SkillItem {
  key: string;
  value: number;
  fill?: string;
}

export interface SkillConfig {
  label: string;
  color: string;
}

export interface SkillCategoryData {
  category: SkillCategory;
  displayName: string;
  skills: SkillItem[];
  config: {
    [key: string]: SkillConfig;
  };
}

// MongoDB Schema (using mongoose)
import mongoose, { Schema, Document } from 'mongoose';

const SkillConfigSchema = new Schema({
  label: { type: String, required: true },
  color: { type: String, required: true }
}, { _id: false });

const SkillItemSchema = new Schema({
  key: { type: String, required: true },
  value: { type: Number, required: true },
  fill: { type: String }
}, { _id: false });

const SkillCategorySchema = new Schema({
  category: {
    type: String,
    enum: ['programming', 'design', 'webdev'],
    required: true
  },
  displayName: { type: String, required: true },
  skills: [SkillItemSchema],
  config: {
    type: Map,
    of: SkillConfigSchema
  }
});

export interface ISkillCategory extends Document, SkillCategoryData {}

// Check if the model exists before compiling it
export const SkillCategoryModel = mongoose.models.SkillCategory || mongoose.model<ISkillCategory>('SkillCategory', SkillCategorySchema);

export default SkillCategoryModel;