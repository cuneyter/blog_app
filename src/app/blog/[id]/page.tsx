import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/BackButton";
import { FC } from "react";
import { IBlogDetailPageProps } from "@/types";
import { getPost } from "@/utils/db";

const BlogDetailPage: FC<IBlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <div className="hero-content flex flex-col lg:flex-row items-start lg:items-center">
        <div className="w-full lg:w-2/3">
          <h1 className="text-5xl font-bold mb-4">{post?.title}</h1>
          <p className="py-6 text-lg">
            {post?.content}
          </p>
          {post?.tag && <div className="badge badge-outline mb-4">{post.tag.name}</div>}
          <ButtonAction id={params.id}/>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
