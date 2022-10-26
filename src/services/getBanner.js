import axios from "../config/axios";

export const getBanner = async () => {
  return await axios
    .get("/v1/asi/banner/")
    .then((res) => res?.data)
    .catch((err) => console.log(err));
};
