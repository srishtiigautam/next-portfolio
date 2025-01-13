import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import UIUX from "@/models/uiux.model";

// GET: Fetch all UI/UX designs
export async function GET() {
  await dbConnect();
  const uiuxDesigns = await UIUX.find();
  return NextResponse.json(uiuxDesigns);
}

// POST: Add a new UI/UX design
export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const uiuxDesign = await UIUX.create(data);
  return NextResponse.json(uiuxDesign, { status: 201 });
}

// PUT: Update an existing UI/UX design
export async function PUT(request: Request) {
  const data = await request.json();
  await dbConnect();
  const uiuxDesign = await UIUX.findByIdAndUpdate(data.id, data, { new: true });
  return NextResponse.json(uiuxDesign);
}

// DELETE: Delete a specific UI/UX design
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await dbConnect();
  await UIUX.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}
