import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090/api/",
  //baseURL: "/api/",
});

export const setToken = (token) =>
  (instance.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export default instance;
