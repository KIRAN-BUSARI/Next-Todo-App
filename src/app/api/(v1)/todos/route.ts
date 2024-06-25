import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
export async function GET(req: NextRequest) {
  const todos = await db.todo.findMany();
  return NextResponse.json({
    data: todos,
  });
}
