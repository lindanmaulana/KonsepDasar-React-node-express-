import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

export const formRegist = async (data, callback) => {
  try {
    if (data) {
      const res = await axios.post(`${baseUrl}/login`, data);
      callback(res);
    }
  } catch (err) {
    console.log(err);
  }
};


export const formLogin = async (data) => {
  try {
      const res = await axios.post(`${baseUrl}/login`, data)
      if(!res.data) {
        throw new Error("Gagal memuat data di server")
      }
  
      return res.data
    } catch(err) {
      console.log(err)
    }
  }


  export const formData = () => {

  }