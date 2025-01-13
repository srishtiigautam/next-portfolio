import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import Skill from "@/models/skill.model";

// GET: Fetch all skills
export async function GET() {
  await dbConnect();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}

// POST: Add a new skill
export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const skill = await Skill.create(data);
  return NextResponse.json(skill, { status: 201 });
}

// PUT: Update an existing skill
export async function PUT(request: Request) {
  const data = await request.json();
  await dbConnect();
  const skill = await Skill.findByIdAndUpdate(data.id, data, { new: true });
  return NextResponse.json(skill);
}

// DELETE: Delete a specific skill
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await dbConnect();
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}
