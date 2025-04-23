import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
      const token = user ? JSON.parse(user)?.userToken : null;

      if (token) headers.set('Authorization', token);
      return headers;
    }
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
