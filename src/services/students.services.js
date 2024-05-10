import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

export const getDataStudents = async () => {
  try {
    const res = await axios.get(`${baseUrl}/dashboard/students`)

    return res.data
  } catch (error) {
    console.log(error);
  }
};
