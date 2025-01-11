import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import About from "@/models/about.model";

// GET: Fetch About Me details
export async function GET() {
  await dbConnect();
  const about = await About.findOne();
  return NextResponse.json(about);
}

// POST: Add new About Me details
export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const about = await About.create(data);
  return NextResponse.json(about, { status: 201 });
}

// PUT: Update About Me details
export async function PUT(request: Request) {
  const data = await request.json();
  await dbConnect();
  const about = await About.findByIdAndUpdate(data.id, data, { new: true });
  return NextResponse.json(about);
}
