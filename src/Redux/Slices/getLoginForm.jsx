import { createSlice } from "@reduxjs/toolkit";

const getLoginForm = createSlice({
  name: "get_login",
  initialState: { show: "" },
  reducers: {
    getLogin: (state, action) => {
      console.log(action);
      state.show = action.payload;
    },
  },
});

export const { getLogin } = getLoginForm.actions;

export default getLoginForm.reducer;
