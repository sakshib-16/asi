import { createSlice } from "@reduxjs/toolkit";

const getAllEpi = createSlice({
  name: "get_epi",
  initialState: { data: [] },
  reducers: {
    getEpi: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getEpi } = getAllEpi.actions;

export default getAllEpi.reducer;
