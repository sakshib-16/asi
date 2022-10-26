import axios from "../config/axios";

export const getEpigraph = async (type) => {
  return await axios
    .get(`/v1/asi/epigraph/name/${type}`)
    .then((res) => res?.data?.content)
    .catch((err) => console.log(err));
};
