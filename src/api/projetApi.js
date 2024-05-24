import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projetApi = createApi({
    reducerPath: "projetApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/src/assets/json" }),
    endpoints: (builder) => ({
        getProjet: builder.query({
            query: () => "/projets.json",
            providesTags: ["Projet"],
        }),
    }),
});

export const { useGetProjetQuery } = projetApi;