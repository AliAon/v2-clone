"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
export const userApi = createApi({
  reducerPath: "userApi",
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
    GetAllUsers: build.query({
      query: () => ({ url: `/user/allUsers` }),
      transformResponse: (response) => response.data,
    }),
    CreateUser: build.mutation({
      query: (credentials) => ({
        url: `/user/signUp`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return {
          data: response.data,
          success: response.success,
          token: response.token,
          message: response.message,
        };
      },
    }),

    LoginUser: build.mutation({
      query: (credentials) => ({
        url: `/user/login`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return {
          data: response.data,
          success: response.success,
          token: response.token,
          message: response.message,
        };
      },
    }),
    VerifyUser: build.mutation({
      query: (credentials) => ({
        url: `/user/emailVerification`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => response,
    }),
    UpdateUser: build.mutation({
      query: (body) => ({ url: `/user/update`, method: "PUT", body: body }),
      transformResponse: (response) => response,
    }),

    GetUserById: build.query({
      query: (id) => ({ url: `/user/getById/${id}` }),
      transformResponse: (response) => response,
    }),

    DeleteUser: build.mutation({
      query: (id) => ({ url: `/user/deleteUser/${id} `, method: "DELETE" }),
      transformResponse: (response) => {
        return {
          response: response.data,
          status: response.success,
        };
      },
    }),
    ForgetPassword: build.mutation({
      query: (credentials) => ({
        url: `/user/VerificationCode`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => response,
    }),
    ResetPassword: build.mutation({
      query: (credentials) => ({
        url: `/user/forgetPassword`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return {
          message: response.message,
          status: response.success,
        };
      },
    }),
    GetShopVerify: build.query({
      query: (shop) => ({ url: `/shopifyAccount/shopify?shop=${shop}` }),
      transformResponse: (response) => response,
    }),
    GetUserByEmail: build.query({
      query: (email) => ({ url: `/user/getByEmail?email=${email}` }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useVerifyUserMutation,
  useGetUserByIdQuery,
  useLazyGetShopVerifyQuery,
  useGetUserByEmailQuery,
} = userApi;
