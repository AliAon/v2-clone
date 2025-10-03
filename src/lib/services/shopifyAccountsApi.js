import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const shopifyAccountsApi = createApi({
  reducerPath: "shopifyAccountsApi",
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
  tagTypes: ["ShopifyAccounts"],

  endpoints: (build) => ({
    GetAllShopifyAccounts: build.query({
      query: (filter) => {
        const params = new URLSearchParams(filter).toString();
        return { url: `/shopifyAccount/findAll?${params}` };
      },
      providesTags: ["ShopifyAccounts"],

      transformResponse: (response) => response.data,
    }),
    CreateListing: build.mutation({
      query: (credentials) => ({
        url: `/shopifyAccount/listProduct`,
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
      invalidatesTags: ["ShopifyAccounts"], // This ensures the cache is invalidated
    }),
    GetAllShopifyProducts: build.query({
      query: (shop) => {
        return { url: `/listShopifyProduct/findAll?shop=${shop}` };
      },
      providesTags: ["ShopifyAccounts"],

      transformResponse: (response) => response.data,
    }),

    GetUnConnectedShopifyProducts: build.query({
      query: (shop) => {
        return { url: `/shopifyAccount/getShopifyProducts?shop=${shop}` };
      },
      providesTags: ["ShopifyAccounts"],   

      transformResponse: (response) => response.data,
    }),
    GetShopifyProductById: build.query({
      query: ({shop,productId}) => {
        return { url: `/shopifyAccount/getShopifyProduct?shop=${shop}&productId=${productId}` };
      },
      transformResponse: (response) => response.data,
      providesTags: ["ShopifyAccounts"],  
    }),
    SyncShopfyProducts: build.mutation({
      query: (credentials) => ({
        url: `/listShopifyProduct/create`,
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
      invalidatesTags: ["ShopifyAccounts"], // This ensures the cache is invalidated
    }),


  }),
});

export const {
  useGetAllShopifyAccountsQuery,
  useCreateListingMutation,
  useGetAllShopifyProductsQuery,
  useGetUnConnectedShopifyProductsQuery,
  useSyncShopfyProductsMutation,
  useGetShopifyProductByIdQuery
} = shopifyAccountsApi;
