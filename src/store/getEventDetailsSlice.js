import { createSlice } from "@reduxjs/toolkit";

const getEventDetailsSlice = createSlice({
  name: "eventDetailsData",
  initialState: {
    eventDetails: {},
    eventValue: "",
    isHandleMadeBit: false,
  },

  reducers: {
    foundEventDetails(state, { payload }) {
      state.eventDetails = payload;
    },
    handleSelectValueChange(state, { payload }) {
      state.eventValue = payload;
    },
    isHandleMadeBitChange(state, { payload }) {
      state.isHandleMadeBit = payload;
    },
  },
});

export const {
  foundEventDetails,
  handleSelectValueChange,
  isHandleMadeBitChange,
} = getEventDetailsSlice.actions;

export default getEventDetailsSlice.reducer;
