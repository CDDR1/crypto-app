import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  recuderPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => ({
        url: "/coins",
        headers: {
          'X-RapidAPI-Key': 'fa16bbeba3msh659eb472112419ep1f7f7djsnd35911ebf66e',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      }),
    }),
    getCoinHistory: builder.query({
      query: () => ({
        url: "/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=5y",
        headers: {
          'X-RapidAPI-Key': 'fa16bbeba3msh659eb472112419ep1f7f7djsnd35911ebf66e',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      })
    }),
  }),
});

export const { useGetCoinsQuery } = cryptoApi;
export const { useGetCoinHistoryQuery } = cryptoApi;