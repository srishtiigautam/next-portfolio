import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestimonial extends Document {
  rating: number;
  comment: string;
  clientAvatarLink: string;
}

const TestimonialSchema: Schema<ITestimonial> = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  clientAvatarLink: { type: String, required: true },
});

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
export default Testimonial;
