"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("x-auth-token", token);
      }
      headers.set("ngrok-skip-browser-warning", "1"); // better as string

      return headers;
    },
  }),
  refetchOnFocus: true,

  endpoints: (build) => ({
    GetAllProduct: build.query({
      query: (filters) => {
        const queryParams = new URLSearchParams(filters).toString();
        return { url: `/product/getAll?${queryParams}` };
      },
      transformResponse: (response) => response.data,
    }),
    GetProductById: build.query({
      query: (id) => {
        return { url: `/product/getById/${id}` };
      },
      transformResponse: (response) => response.data,
    }),
    UploadImage: build.mutation({
      query: (credentials) => ({
        url: `/product/uploadImage`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => response,
    }),
    CustomizeProduct: build.mutation({
      query: (credentials) => ({
        url: `/customization/create`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return {
          data: response.data,
          success: response.success,
          message: response.message,
        };
      },
    }),

    CreateEstimatePrice: build.mutation({
      query: (credentials) => ({
        url: `/product/getRRPAndEstimatedProfit`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => response,
    }),
    GetCountryByLatLong: build.query({
      query: (latlng) => {
        return {
          url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        };
      },
      transformResponse: (response) => response.data.address.country,
    }),
    GetVareintByProductId: build.query({
      query: (id) => ({
        url: `/variant/all?productId=${id}`,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useUploadImageMutation,
  useCustomizeProductMutation,
  useCreateEstimatePriceMutation,
  useLazyGetCountryByLatLongQuery,
  useGetVareintByProductIdQuery,
} = productApi;
