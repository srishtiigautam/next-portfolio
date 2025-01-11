import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import Project from "@/models/project.model";

// GET: Fetch all projects
export async function GET() {
  await dbConnect();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

// POST: Add a new project
export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const project = await Project.create(data);
  return NextResponse.json(project, { status: 201 });
}

// PUT: Update an existing project
export async function PUT(request: Request) {
  const data = await request.json();
  await dbConnect();
  const project = await Project.findByIdAndUpdate(data.id, data, { new: true });
  return NextResponse.json(project);
}

// DELETE: Delete a specific project
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await dbConnect();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}
