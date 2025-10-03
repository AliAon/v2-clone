"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("x-auth-token", token);
      }
      headers.set("ngrok-skip-browser-warning", "1");
      return headers;
    },
  }),
  endpoints: (build) => ({
    GetAllCategory: build.query({
      query: () => ({ url: `/category/findAll` }),
      transformResponse: (response) => response.data,
    }),
    GetCategoryById: build.query({
      query: (categoryId) => ({ url: `/category/find/${categoryId}` }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } = categoryApi;
