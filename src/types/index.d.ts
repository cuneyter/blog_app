import {Tag} from "@prisma/client";
import {SubmitHandler} from "react-hook-form";

export type FormInputPost = {
  title: string;
  content: string;
  tagId: string;
};

export  interface IPost {
  id: string;
  title: string;
  content: string;
  tagId: string;
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

export interface IContextProps {
  params: {
    postId: string;
  }
}

export interface IButtonActionProps {
  id: string;
}

export interface IFormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  dataPost?: FormInputPost;
  isPendingSubmit: boolean;
}

export interface IEditPostProps {
  params : {
    id : string
  }
}
