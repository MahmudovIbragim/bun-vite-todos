import { api as index } from "../../shared/api/index";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    GetProduct: builder.query<Product.GetData, void>({
      query: () => ({
        url: "todos",
        method: "GET",
        params: {
          per_page: 30,
        },
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
    CreateProduct: builder.mutation<Product.ProductData, Product.CreateProduct>(
      {
        query: (data) => ({
          url: "todos",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Todo"],
      }
    ),
    DeleteProduct: builder.mutation<Product.ProductData, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = api;
