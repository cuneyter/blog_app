import Link from "next/link";

const PostCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/blog/1" className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard;
