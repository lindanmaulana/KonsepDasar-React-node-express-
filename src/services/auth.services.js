import axios from "axios";

export const formLogin = async (data, callback) => {
  const baseUrl = import.meta.env.VITE_BASEURL;
  try {
    if (data) {
      const res = await axios.post(`${baseUrl}/login`, data);
      callback(res);
    }
  } catch (err) {
    console.log(err);
  }
};
