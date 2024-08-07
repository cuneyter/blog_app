'use client';

import {SubmitHandler} from "react-hook-form";
import {FormInputPost, IEditPostProps, IPost} from "@/types";
import FormPost from "@/components/FormPost";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {FC} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

const EditPost: FC<IEditPostProps> = ( { params } ) => {
  const { id } = params;
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: dataPost, isLoading: isLoadingPost } = useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const {mutate: updatePost, isPending: isPendingSubmit} = useMutation(
    {
      mutationFn: (newPost: FormInputPost) => {
        return axios.patch(`/api/posts/${id}`, newPost);
      },
      onError: (error) => {
        console.error(error);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["post", id] });
        router.push(`/blog/${id}`);
        router.refresh();
      }
    }
  )

  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  }

  return (
    <div>
      <h1 className='text-2xl my-4 font-bold text-center'>Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing={true} initialValue={dataPost} />
    </div>
  );
}

export default EditPost;
