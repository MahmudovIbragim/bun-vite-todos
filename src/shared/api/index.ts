import { fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["Todo"],
  endpoints: () => ({}),
});
