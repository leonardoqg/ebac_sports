import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // adjust baseUrl to your backend
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products'
    })
  })
});

export const { useGetProductsQuery } = productsApi;