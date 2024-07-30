'use client';

import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/BackButton";

const BlogDetailPage = () => {
  return (
    <div>
      <BackButton/>
      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">Post title</h1>
        <ButtonAction/>
      </div>
        <p className="text-gray-700">Post content</p>
    </div>
  )
}

export default BlogDetailPage;
