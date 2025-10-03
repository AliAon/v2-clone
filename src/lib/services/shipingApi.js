"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const shipingApi = createApi({
  reducerPath: "shipingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  refetchOnFocus: true,
  tagTypes: ["Shiping"],
  endpoints: (build) => ({
    DeleteShiping: build.mutation({
      query: (id) => ({
        url: `/shipping/delete/${id} `,
        method: "DELETE",
      }),
      transformResponse: (response) => {
        return {
          response: response.data,
          status: response.success,
          message: response.message,
        };
      },
      invalidatesTags: ["Shiping"], // This ensures the cache is invalidated
    }),

    GetAllShiping: build.query({
      query: (filter) => {
        const params = new URLSearchParams(filter).toString();
        return { url: `/shipping/findAll?${params}` };
      },
      transformResponse: (response) => response,
      providesTags: ["Shiping"],
    }),
    UpdateShiping: build.mutation({
      query: ({ id, body }) => ({
        url: `/shipping/update/${id}`,
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
      invalidatesTags: ["Shiping"], // This ensures the cache is invalidated
    }),

    CreateShiping: build.mutation({
      query: (credentials) => ({
        url: `/shipping/create`,
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
      invalidatesTags: ["Shiping"], // This ensures the cache is invalidated
    }),

    GetShipingById: build.query({
      query: (id) => {
        return { url: `shipping/find/${id}` };
      },
      transformResponse: (response) => response,
      providesTags: ["Shiping"],
    }),

    GetShipingMethods: build.query({
      query: () => {
        return { url: `/shippingMethod/getAll` };
      },
      transformResponse: (response) => response,
      providesTags: ["Shiping"],
    }),


  }),
});

export const {
    useDeleteShipingMutation,
    useGetAllShipingQuery,
    useUpdateShipingMutation,
    useCreateShipingMutation,
    useGetShipingByIdQuery,
    useLazyGetShipingByIdQuery,
    useGetShipingMethodsQuery
} = shipingApi;
