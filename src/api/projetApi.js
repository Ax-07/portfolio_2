import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projetApi = createApi({
    reducerPath: "projetApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: (builder) => ({
        getProjet: builder.query({
            query: () => "/json/projets.json",
            providesTags: ["Projet"],
        }),
    }),
});

export const { useGetProjetQuery } = projetApi;