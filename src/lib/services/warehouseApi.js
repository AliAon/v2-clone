"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const warehouseApi = createApi({
  reducerPath:'warehouseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('x-auth-token', token);
      }
      return headers;
    }

  }),
  endpoints: (build) => ({
    GetAllWarehouse: build.query({
      query: () => ({ url: `warehouse/getAll` }),
      transformResponse: (response) => response.data
    }),
    GetAllInventry: build.query({
      query: () => ({ url: `/inventory/all` }),
      transformResponse: (response) => response.data
    }),
    GetAllProductByInventory: build.query({
      query: ({id,filters}) => {
        if (!id) return null; // Only run query if id is not null
        const queryParams = new URLSearchParams(filters).toString();
        return { url: `/inventory/getAllProduct?warehouseId=${id}&${queryParams}` }
      },
      transformResponse: (response) => response.data
    }),
    
   
  }),
});

export const { useGetAllWarehouseQuery,useGetAllInventryQuery,useGetAllProductByInventoryQuery } = warehouseApi;
