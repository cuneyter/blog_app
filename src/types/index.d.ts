import {Tag} from "@prisma/client";

export type FormInputPost = {
  title: string;
  content: string;
  tag: string;
};

export  interface IPost {
  id: string;
  title: string;
  content: string;
  tag: Tag
}

export interface IPostCardProps {
  post: IPost;
}

export interface IBlogDetailPageProps {
  params: {
    id: string;
  }
}
