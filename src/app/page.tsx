import PostCard from "@/components/PostCard";
import { IPost } from "@/types";
import { getPosts } from "@/utils/db";

const Home = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Home;
