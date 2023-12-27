import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface PostItem {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    email: string;
    phone_number: string;
    id: number;
    password: string;
    name: string;
    user_city: string;
    reg_date: string;
  };
  photos: string[];
  comments: string[];
}

interface IGetPostListResponse {
  status: number;
  message: PostItem[];
}

export interface IGetPostByIdResponse {
  status: number;
  message: PostItem;
}

export interface IAddPostPayload {
  user_id: number;
  main_text: string;
}

export interface IAddPostResponse {
  status: number;
  post_id: number;
}
export interface IEditPostPayload {
  post_id: number;
  new_text: string;
}

export interface IEditPostResponse {
  status: string;
  message: string;
}

export interface IDeletePostResponse {
  status: number;
  message: string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => "/post",
    }),
    getPostId: builder.query<IGetPostByIdResponse, string>({
      query: (postId: string) => `/post?post_id=${postId}`,
    }),
    addNewPost: builder.mutation<IAddPostResponse, IAddPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
    }),
    editPost: builder.mutation<IEditPostResponse, IEditPostPayload>({
      query: (payload) => ({
        url: "/post",
        method: "PUT",
        body: payload,
      }),
    }),
    deletePost: builder.mutation<IDeletePostResponse, any>({
      query: (post_id: string) => ({
        url: `/post/?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostListQuery,
  useLazyGetPostListQuery,
  useLazyGetPostIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useEditPostMutation
} = postApi;
