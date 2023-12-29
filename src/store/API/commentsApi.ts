import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IGetPostCommentByIdResponse {
  status: number;
  message: string;
}

export interface IAddPostCommentResponse {
  status: number,
  post_id: number 
}

export interface IAddPostComentPayload {
  post_id: number;
  user_id: number;
  text: string;
}

export interface IEditPostCommentPayload {
  comment_id: number;
  new_comment_text: string;
}

export interface IEditPostCommentResponse {
  status: number,
  message: string
}

export interface IDeletePostCommentResponse {
  status: number;
  message: string;
}

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostId: builder.query<IGetPostCommentByIdResponse, string>({
      query: (postId: string) => `/comment?post_id=${postId}`,
    }),
    addCommetToPost: builder.mutation<IAddPostCommentResponse, IAddPostComentPayload>({
      query: (payload) => ({
        url: "/commet",
        method: "POST",
        body: payload,
      }),
    }),
    editPost: builder.mutation<IEditPostCommentResponse, IEditPostCommentPayload>({
      query: (payload) => ({
        url: "/comment",
        method: "PUT",
        body: payload,
      }),
    }),
    deletePostCommet: builder.mutation<IDeletePostCommentResponse, string>({
      query: (comment_id: string) => ({
        url: `/post/?post_id=${comment_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
