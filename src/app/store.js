import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../slices/coinsSlice";
import { newsApi } from "../slices/newsSlice";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(cryptoApi.middleware).concat(newsApi.middleware),
});