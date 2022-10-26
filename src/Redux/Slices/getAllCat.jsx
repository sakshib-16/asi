import { createSlice } from "@reduxjs/toolkit";

const getAllCat = createSlice({
  name: "get_category",
  initialState: { data: [] },
  reducers: {
    getCategory: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getCategory } = getAllCat.actions;

export default getAllCat.reducer;
