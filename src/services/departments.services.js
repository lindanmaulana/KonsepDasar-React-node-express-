import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

export const getDataDepartments = async () => {
  try {
    const res = await axios.get(`${baseUrl}/departments`);

    if (!res.data) throw new Error("Gagal mengambil data");

    return res.data.payload.datas;
  } catch (err) {
    return err;
  }
};
