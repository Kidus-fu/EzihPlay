import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const loginAPI = createApi({
    reducerPath: "loginAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ezihplay.onrender.com/api-v1/",
        //  baseUrl: "http://localhost:8000/api-v1/",
    }),
    endpoints: (builder) => ({
        postlogin: builder.mutation({
            query: ({ loginuser }) => ({
                url: `token/`,
                method: 'POST',
                body: loginuser,
                headers: {
                    'Content-Type': 'application/json',
                }
            }),
        }),
    })
})

export const { usePostloginMutation } = loginAPI