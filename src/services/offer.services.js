import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

export const getDataOffer = async () => {
  try {
    const res = await axios.get(`${baseUrl}/offer`);

    if (!res.data) throw new Error("Gagal mengambil data");

    return res.data.payload.datas;
  } catch (error) {
    console.log(error)
  }
};
