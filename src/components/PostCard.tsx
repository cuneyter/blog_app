import Link from "next/link";
import {FC} from "react";
import {IPostCardProps} from "@/types";

const PostCard: FC<IPostCardProps>= ({post}) => {
  const {id, title, content, tag} = post;

  return (
    <div className="card bg-base-100 w-full shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{ title }</h2>
        <p>{ content }</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{tag.name}</div>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard;
