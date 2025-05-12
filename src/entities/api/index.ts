import { api as index } from "../../shared/api/index";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    GetProduct: builder.query<Product.GetData, void>({
      query: () => ({
        url: "jetourcars",
        method: "GET",
      }),
      providesTags: ["Todo"],
    }),
  }),
});

export const { useGetProductQuery } = api;
