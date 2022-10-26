import { createSlice } from "@reduxjs/toolkit";

const getAllSearch = createSlice({
  name: "get_epi",
  initialState: { search: "" },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = getAllSearch.actions;

export default getAllSearch.reducer;
