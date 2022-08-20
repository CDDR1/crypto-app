import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bing-news-search1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ selection }) => ({
        url: `/news/search?q=${selection}&safeSearch=Off&textFormat=Raw&reshness=Day&count=31`,
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": "fa16bbeba3msh659eb472112419ep1f7f7djsnd35911ebf66e",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;