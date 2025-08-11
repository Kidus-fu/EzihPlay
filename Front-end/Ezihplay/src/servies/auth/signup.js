import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const singupAPI = createApi({
  reducerPath: "singupAPI",
  baseQuery: fetchBaseQuery({
    //  baseUrl: "http://localhost:8000/api-v1/",
    baseUrl: "https://ezihplay.onrender.com/api-v1/",
  }),
  endpoints: (builder) => ({
    postSignup: builder.mutation({
      query: (userData) => ({
        url: `register/`, // your signup endpoint here
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { usePostSignupMutation } = singupAPI;
