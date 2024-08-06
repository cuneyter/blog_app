import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/BackButton";
import { FC } from "react";
import { IBlogDetailPageProps } from "@/types";
import { getPost } from "@/utils/db";

const BlogDetailPage: FC<IBlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">{post?.title}</h1>
        <ButtonAction id={params.id}/>
      </div>
      <p className="text-gray-700">{post?.content}</p>
      {post?.tag && <div className="badge badge-outline">{post.tag.name}</div>}
    </div>
  );
};

export default BlogDetailPage;
