import { api as index } from "../../shared/api/index";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    GetProduct: builder.query<Product.GetData, void>({
      query: () => ({
        url: "todos",
        method: "GET",
      }),
      providesTags: ["Todo"],
    }),
    GetProductById: builder.query<Product.ProductData, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "GET",
      }),
      providesTags: ["Todo"],
    }),
  }),
});

export const { useGetProductQuery, useGetProductByIdQuery } = api;
