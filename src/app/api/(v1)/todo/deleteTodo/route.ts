import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") ?? undefined;
    if (!id) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const deletedTodo = await db.todo.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
