import { configureStore } from "@reduxjs/toolkit";
import getAllCat from "./Slices/getAllCat";
import getAllEpi from "./Slices/getAllEpi";
import getAllBanner from "./Slices/getAllBanner";
import getAllDetail from "./Slices/getAllDetail";
import getAllSearch from "./Slices/getAllSearch";
import getLoginForm from "./Slices/getLoginForm";

export const store = configureStore({
  reducer: {
    getAllCat,
    getAllEpi,
    getAllBanner,
    getAllDetail,
    getAllSearch,
    getLoginForm,
  },
});
