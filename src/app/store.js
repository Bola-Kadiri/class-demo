

import { configureStore } from '@reduxjs/toolkit'
import { studentApi } from '../feature/studentSlice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [studentApi.reducerPath]: studentApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
})

