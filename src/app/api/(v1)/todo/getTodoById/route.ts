import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") ?? undefined;

    if (!id) {
      NextResponse.json({});
    }

    const todo = await db.todo.findFirst({
      where: {
        id: id,
      },
    });
    return NextResponse.json(
      {
        todo,
        message: `Fetched the Todo Successfully`,
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
