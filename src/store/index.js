import { configureStore } from "@reduxjs/toolkit";

import { sportsEventsApi } from "./sportsEventsApi";
import eventDetailsDataReducer from "./getEventDetailsSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sportsEventsApi.middleware),
  reducer: {
    [sportsEventsApi.reducerPath]: sportsEventsApi.reducer,
    eventDetailsData: eventDetailsDataReducer,
  },
});
