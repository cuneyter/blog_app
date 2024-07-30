import {db} from "@/lib/db";
import {NextResponse} from "next/server";
import {Tag} from "@prisma/client";

export async function GET() {
  try {
    const tags: Tag[] = await db.tag.findMany();
    return NextResponse.json(tags, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "Could not get tags"}, {status: 500});
  }
}
