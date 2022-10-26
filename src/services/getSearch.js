import axios from "../config/axios";

export const getSearch = async (q) => {
  return await axios
    .get(`/v1/asi/epigraph/search/${q.trim()}`)
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
