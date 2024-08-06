import {db} from "@/lib/db";
import {IPost} from "@/types";

export const getPost = async (id: string) => {
  return db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
};

export const getPosts = async (): Promise<IPost[]> => {
  try {
    return await db.post.findMany(
      {
        select: {
          id: true,
          title: true,
          content: true,
          tag: true,
        },
        orderBy: {
          createdAt: "desc",
        }
      }
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}
