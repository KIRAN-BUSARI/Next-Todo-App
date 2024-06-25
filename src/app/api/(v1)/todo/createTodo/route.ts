import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
import * as zod from "zod";

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string().optional(),
});
export async function POST(req: NextRequest) {
  try {
    const parseResult = todoSchema.safeParse(await req.json());

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.message },
        { status: 400 }
      );
    }
    const { title, description } = parseResult.data;

    const todo = await db.todo.create({
      data: {
        title,
        description,
      },
    });

    if (!todo) {
      return NextResponse.json({
        status: 401,
        message: "Todo creation failed",
      });
    }

    return NextResponse.json(
      {
        message: "Todo Created Successfully",
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
