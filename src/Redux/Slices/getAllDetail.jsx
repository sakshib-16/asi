import { createSlice } from "@reduxjs/toolkit";

const getAllDetail = createSlice({
  name: "get_detail",
  initialState: { data: "" },
  reducers: {
    getDetail: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getDetail } = getAllDetail.actions;

export default getAllDetail.reducer;
