import axios from "../config/axios";

export const getCategories = async () => {
  return await axios
    .get(`/v1/asi/category`)
    .then((res) => res?.data?.content)
    .catch((err) => console.log(err));
};
