import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = { ...action.payload, ...state }; //spread operator
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
