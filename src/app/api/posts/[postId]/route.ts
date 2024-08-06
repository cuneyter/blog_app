import {db} from "@/lib/db";
import {NextResponse} from "next/server";
import {IContextProps} from "@/types";
export async function DELETE(req: Request, context: IContextProps) {
  try {
    await db.post.delete({
      where: {
        id: context.params.postId,
      },
    });
    return new Response(null, {status: 204});
  } catch (error) {
    return NextResponse.json({message: "Could not delete the post"}, {status: 500});
  }
}

export async function PATCH(req: Request, context: IContextProps) {
  const body = await req.json();

  try {
    await db.post.update({
      where: {
        id: context.params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      }
    });
    return NextResponse.json({message: "Post updated"}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "Could not update the post"}, {status: 500});
  }
}
