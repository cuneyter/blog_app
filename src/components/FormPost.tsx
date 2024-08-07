'use client';

import { useForm, SubmitHandler } from "react-hook-form"
import { useQuery } from "@tanstack/react-query";
import { FormInputPost } from "@/types";
import { FC } from "react";
import axios from "axios";
import {Tag} from "@prisma/client";
import { IFormPostProps } from "@/types";

const FormPost: FC<IFormPostProps> = ({ submit, isEditing, initialValue }) => {
  const { register, handleSubmit} = useForm<FormInputPost>(
    { defaultValues: initialValue }
  );

  // Fetch tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  })

  return (
    <form
      className="flex flex-col items-center justify-center gap-5 mt-10"
      onSubmit={handleSubmit(submit)}
    >
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Post title ..."
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content ..."
      ></textarea>

      { isLoadingTags?
        <span className="loading loading-spinner loading-md"></span>
        :
        <select
          {...register("tagId", {required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue=""
        >
          <option disabled value="">Select tag</option>
          {dataTags?.map((tag: Tag) => (
            <option key={tag.id} value={tag.id}>{tag.name}</option>
          ))}
        </select>
      }

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}

export default FormPost;
