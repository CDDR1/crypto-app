import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  recuderPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetCoinsQuery } = cryptoApi;