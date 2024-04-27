import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

// Register Page
export const formRegist = async (data, callback) => {
  try {
    if (data) {
      const res = await axios.post(`${baseUrl}/regist`, data);
      callback(true, res);
    }

  } catch (err) {
    console.log(err);
  }
};

// Login Page
export const formLogin = async (data) => {
  try {
    // validate inputan
    if(data.username.trim() === '' || data.password.trim() === '') {
      throw new Error("Nilai yang di input tidak benar!!")
    } else {
      // Hit api
      const res = await axios.post(`${baseUrl}/login`, data)

      // Throw jika error memuat data
      if(!res.data) {
        throw new Error("Gagal memuat data di server")
      }

      return res.data
    }


    } catch(err) {
      console.error("Terjadi kesalahan!!", err)
    }
  }


  // All page (sumber data acount)
  export const formData = async() => {
    try {
      const res = await axios.get(`${baseUrl}/acount`)

      if(!res.data) throw new Error("Data is undefined")

      return res.data
    } catch(error) {
      console.error("Error load data: ", error)
    }
  }