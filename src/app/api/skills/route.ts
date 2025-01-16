import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect.util";
import { SkillCategoryData } from "@/models/skill.model";
import SkillCategoryModel from "@/models/skill.model";

// GET: Fetch all skills
export async function GET() {
  try {
    await dbConnect();
    const skills = await SkillCategoryModel.find({});
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch skills ${error}` },
      { status: 500 }
    );
  }
}

// POST: Add a new skill
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body: SkillCategoryData = await request.json();

    const newSkillCategory = await SkillCategoryModel.create(body);
    return NextResponse.json(newSkillCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create skill category ${error}` },
      { status: 500 }
    );
  }
}

// PUT: Update an existing skill
// export async function PUT(request: Request) {
//   const data = await request.json();
//   await dbConnect();
//   const skill = await Skill.findByIdAndUpdate(data.id, data, { new: true });
//   return NextResponse.json(skill);
// }

// DELETE: Delete a specific skill
// export async function DELETE(request: Request) {
//   const { id } = await request.json();
//   await dbConnect();
//   await Skill.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Deleted successfully" });
// }

interface Params {
  params: {
    category: string;
  };
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await dbConnect();

    // Validate category parameter
    if (!params.category) {
      return NextResponse.json(
        { error: "Category parameter is required" },
        { status: 400 }
      );
    }

    // Parse and validate request body
    const body: Partial<SkillCategoryData> = await request.json();

    // Ensure the category in the URL matches any category in the update body
    if (body.category && body.category !== params.category) {
      return NextResponse.json(
        { error: "Category in URL must match category in update data" },
        { status: 400 }
      );
    }

    // Find and update the skill category
    const updatedSkill = await SkillCategoryModel.findOneAndUpdate(
      { category: params.category },
      {
        $set: {
          ...body,
          // Ensure category remains unchanged
          category: params.category,
        },
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators
      }
    );

    if (!updatedSkill) {
      return NextResponse.json(
        { error: "Skill category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedSkill);
  } catch (error) {
    console.error("Error updating skill category:", error);
    return NextResponse.json(
      { error: "Failed to update skill category" },
      { status: 500 }
    );
  }
}

// Delete a skill category
export async function DELETE(request: Request, { params }: Params) {
  try {
    await dbConnect();

    // Validate category parameter
    if (!params.category) {
      return NextResponse.json(
        { error: "Category parameter is required" },
        { status: 400 }
      );
    }

    // Find and delete the skill category
    const deletedSkill = await SkillCategoryModel.findOneAndDelete({
      category: params.category,
    });

    if (!deletedSkill) {
      return NextResponse.json(
        { error: "Skill category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Skill category deleted successfully",
      deletedSkill,
    });
  } catch (error) {
    console.error("Error deleting skill category:", error);
    return NextResponse.json(
      { error: "Failed to delete skill category" },
      { status: 500 }
    );
  }
}
