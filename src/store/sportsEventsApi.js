import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sportsEventsApi = createApi({
  reducerPath: "sportsEvents/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sports-events-5240c-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getCurrentEvents: builder.query({
      query: () => "currentEvents.json",
    }),
    getUpcomingEvents: builder.query({
      query: () => "upcomingEvents.json",
    }),
  }),
});

export const { useGetCurrentEventsQuery, useGetUpcomingEventsQuery } =
  sportsEventsApi;
