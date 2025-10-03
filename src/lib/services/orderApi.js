"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const orderApi = createApi({
  reducerPath: "orderApi",
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
    CreateOrder: build.mutation({
      query: (credentials) => ({
        url: `/order/create`,
        method: "POST",
        body: credentials,
      }),
    }),
    GetAllOrder: build.query({
      query: (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        return { url: `/order/findAll?${queryParams}` };
      },
      transformResponse: (response) => response.data,
    }),
    GetOrderById: build.query({
      query: (id) => {
        return { url: `/orderedProduct/getOrder/${id}` };
      },
      transformResponse: (response) => response.data,
    }),
    getCustomerOrderedProduct: build.query({
      query: (id) => {
        return { url: `/orderedProduct/CustomerOrderedProduct/${id}` };
      },
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetOrderByIdQuery,
  useGetCustomerOrderedProductQuery,
} = orderApi;
