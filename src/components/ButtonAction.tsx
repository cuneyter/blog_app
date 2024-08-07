"use client"

import Link from "next/link";
import {Pencil, Trash} from "lucide-react";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import axios from "axios";
import {FC} from "react";
import {IButtonActionProps} from "@/types";


const ButtonAction: FC<IButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const { mutate: deletePost, isPending} = useMutation(
    {
      mutationFn: async () => {
        return axios.delete(`/api/posts/${id}`);
      },
      onError: (error) => {
        console.error(error);
        alert('An error occurred while deleting the post.');
      },
      onSuccess: () => {
        router.push('/');
        router.refresh();
      }
    }
  )

  return (
    <div>
      <Link href={`/blog/edit/${id}`} className="btn btn-primary mr-2">
        <Pencil className="mr-1" /> Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        {isPending && <span className="loading loading-spinner"/>}
        {isPending ? "Deleting..." : (
          <>
            <Trash className="mr-1"/> Delete
          </>
        )}
      </button>
    </div>
  );
}

export default ButtonAction;
