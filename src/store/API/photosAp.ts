import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface IGetPostPhotoResponse {
  status: number;
  message: {
    status: number;
    message: null;
  };
}

export interface IDeletePostPhotoResponse {
  status: number;
  message: string;
}

export const photoApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostPhotosList: builder.query<IGetPostPhotoResponse, null>({
      query: () => `/photo`,
    }),
    getPostPhotosItem: builder.query<any, string>({
      query: (photo_id) => `/photo?photo_id=${photo_id}`,
    }),
    addPostPhoto: builder.mutation<any, any>({
      query: (payload) => ({
        url: 'add-photo',
        method: 'POST',
        body: payload,
        // TODO
      })
    }),
    deletePostPhoto: builder.mutation<IDeletePostPhotoResponse, string>({
      query: (photo_id: string) => ({
        url: `/photo/?photo_id=${photo_id}`,
        method: 'DELETE'
      })
    })
  })
})