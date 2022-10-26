import axios from "../config/axios";

export const getDownload = async (data) => {
  return await axios
    .post(`/v1/asi/image`, data)
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
