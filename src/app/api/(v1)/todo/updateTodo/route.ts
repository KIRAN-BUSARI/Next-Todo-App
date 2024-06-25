import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
import * as zod from "zod";

const todoUpdateSchema = zod.object({
  title: zod.string().optional(),
  description: zod.string().optional(),
});

export async function PUT(req: NextRequest) {
  try {
    const parsedResult = todoUpdateSchema.safeParse(await req.json());

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") ?? undefined;

    if (!parsedResult.success) {
      return NextResponse.json(
        { error: parsedResult.error.message },
        { status: 400 }
      );
    }

    const updateTodo = await db.todo.update({
      where: {
        id: id,
      },
      data: parsedResult.data,
    });
    if (!updateTodo) {
      return NextResponse.json(
        { message: "Todo Updation failed" },
        { status: 402 }
      );
    }
    return NextResponse.json(
      {
        message: "Todo Updated Successfully",
        updateTodo,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
