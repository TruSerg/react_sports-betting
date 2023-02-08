import { createSlice } from "@reduxjs/toolkit";

const getEventDetailsSlice = createSlice({
  name: "eventDetailsData",
  initialState: {
    eventDetails: {},
    eventValue: "",
  },

  reducers: {
    foundEventDetails(state, { payload }) {
      state.eventDetails = payload;
    },
    handleSelectValueChange(state, { payload }) {
      state.eventValue = payload;
    },
  },
});

export const { foundEventDetails, handleSelectValueChange } =
  getEventDetailsSlice.actions;

export default getEventDetailsSlice.reducer;
