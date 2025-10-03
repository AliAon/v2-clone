"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const flashSalesApi = createApi({
  reducerPath: "flashSalesApi",
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
  refetchOnFocus: true,
  tagTypes: ["FlashSale"],
  endpoints: (build) => ({
    DeleteFlashSale: build.mutation({
      query: (id) => ({
        url: `/flashSales/delete/${id} `,
        method: "DELETE",
      }),
      transformResponse: (response) => {
        return {
          response: response.data,
          status: response.success,
          message: response.message,
        };
      },
      invalidatesTags: ["FlashSale"], // This ensures the cache is invalidated
    }),

    GetAllFlashSales: build.query({
      query: (filter) => {
        const params = new URLSearchParams(filter).toString();
        return { url: `/flashSales/findAll?${params}` };
      },
      transformResponse: (response) => response,
      providesTags: ["FlashSale"],
    }),
    UpdateFlashSale: build.mutation({
      query: ({ id, body }) => ({
        url: `/flashSales/update?productId=${id}`,
        method: "PUT",
        body: body,
      }),
      transformResponse: (response) => {
        return {
          response: response.data,
          success: response.success,
          message: response.message,
        };
      },
      invalidatesTags: ["FlashSale"], // This ensures the cache is invalidated
    }),

    CreateFlashSale: build.mutation({
      query: (credentials) => ({
        url: `/flashSales/create`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return {
          response: response.data,
          success: response.success,
          message: response.message,
        };
      },
      invalidatesTags: ["FlashSale"], // This ensures the cache is invalidated
    }),

    GetFlashSaleById: build.query({
      query: (id) => {
        return { url: `/flashSales/find?productId=${id}` };
      },
      transformResponse: (response) => response,
      providesTags: ["FlashSale"],
    }),
  }),
});

export const {
  useDeleteFlashSaleMutation,
  useGetAllFlashSalesQuery,
  useUpdateFlashSaleMutation,
  useGetFlashSaleByIdQuery,
  useCreateFlashSaleMutation,
} = flashSalesApi;
