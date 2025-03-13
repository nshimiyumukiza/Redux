import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiClientFile = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://erneste-backend.onrender.com/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
   tagTypes:["getUser","getImage"],
    endpoints: (builder) => ({
        getUser:builder.query({
            query:()=> "users",
            providesTags:["getUser"]
        }),
        registration: builder.mutation({
            query: ({ name, email, password, confirmPassword }) => ({
                url: "users",
                method: "POST",
                body: { name, email, password, confirmPassword }
            }),
            invalidatesTags:["getUser"]
        }),
       
    })
});

export const { useRegistrationMutation ,useGetUserQuery} = ApiClientFile;
