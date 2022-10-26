import { createSlice } from "@reduxjs/toolkit";

const getAllBanner = createSlice({
  name: "get_banner",
  initialState: { data: [] },
  reducers: {
    getBannerData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getBannerData } = getAllBanner.actions;

export default getAllBanner.reducer;
