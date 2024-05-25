import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const projetApi = createApi({
//     reducerPath: "projetApiJson",
//     baseQuery: fetchBaseQuery({ baseUrl: "./src/assets/json" }),
//     endpoints: (builder) => ({
//         getProjetJson: builder.query({
//             query: () => "/projets.json",
//             providesTags: ["ProjetJson"],
//         }),
//     }),
// });
export const projetApi = createApi({
    reducerPath: 'projetApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/api/projet`}),
    endpoints: (builder) => ({
      getProjet: builder.query({ 
        query: () => '/',
        // Ajout d'un tag 'Projet' pour cette requête
        providesTags: ['Projet']
      }),
    }),
});

export const { useGetProjetJsonQuery } = projetApi;