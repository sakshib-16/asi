import axios from "../config/axios";

export const getEpiDetail = async (id) => {
  return await axios
    .get(`/v1/asi/epigraph/${id}`)
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
