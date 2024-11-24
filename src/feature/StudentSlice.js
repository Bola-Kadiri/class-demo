import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for the student API
const BASE_URL = 'http://localhost:3000/student/';

// Create a service for the student API
export const studentApi = createApi({
  reducerPath: 'studentApi', // A unique key for the reducer in the store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Endpoint to fetch all students
    fetchStudents: builder.query({
      query: () => '/', // Endpoint path for fetching students
    }),
   
    
    // Endpoint to create a new student
    createStudent: builder.mutation({
      query: (student) => ({
        url: '/',
        method: 'POST',
        body: student,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useFetchStudentsQuery,
  useCreateStudentMutation,
} = studentApi;
