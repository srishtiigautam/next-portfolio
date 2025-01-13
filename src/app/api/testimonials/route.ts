import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import Testimonial from "@/models/testimonial.model";

// GET: Fetch all testimonials
export async function GET() {
  await dbConnect();
  const testimonials = await Testimonial.find();
  return NextResponse.json(testimonials);
}

// POST: Add a new testimonial
export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const testimonial = await Testimonial.create(data);
  return NextResponse.json(testimonial, { status: 201 });
}

// DELETE: Delete a specific testimonial
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await dbConnect();
  await Testimonial.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}
