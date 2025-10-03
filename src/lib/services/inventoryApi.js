"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const inventoryApi = createApi({
  reducerPath: "inventoryApi",
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
    GetProductByInventory: build.query({
      query: ({ id, productId }) => {
        if (!id || !productId) return null; // Only run query if id is not null
        return {
          url: `/inventory/getProductInventory?warehouseId=${id}&productId=${productId}`,
        };
      },
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetProductByInventoryQuery } = inventoryApi;
