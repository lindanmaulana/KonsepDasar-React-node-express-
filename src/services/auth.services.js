import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

// Register Page
export const formRegist = async (data, callback) => {
  try {
    if (data) {
      const res = await axios.post(`${baseUrl}/register`, data);
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
    if (data.username.trim() === "" || data.password.trim() === "") {
      throw new Error("Nilai yang di input tidak benar!!");
    } else {
      // Hit api
      const res = await axios.post(`${baseUrl}/login`, data);

      // Throw jika error memuat data
      if (!res.data) {
        throw new Error("Gagal memuat data di server");
      }

      return res.data;
    }
  } catch (err) {
    console.error("Terjadi kesalahan!!", err);
  }
};

export const formLoginMahasiswa = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/login-mahasiswa`, data);

    if (!res.data) throw new Error("Akun anda salah");

    return res.data
  } catch (error) {
    console.log("Terjadi kesalahan", error);

    return error
  }
};

export const formLoginAdmin = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/login-admin`, data);

    if (!res) throw new Error("Akun anda salah");

    return res.data;
  } catch (error) {
    console.log(error);

    return error
  }
};

// All page (sumber data acount)
export const formData = async () => {
  try {
    const res = await axios.get(`${baseUrl}/acount`);

    if (!res.data) throw new Error("Data is undefined");

    return res.data;
  } catch (error) {
    console.error("Error load data: ", error);
  }
};

// Dashboard page (mengecek apakah ada data sebelum masuk ke dashboard page)
export const acount = async () => {
  try {
    const res = await axios.get(`${baseUrl}/acount`);
    return res.data;
  } catch (err) {
    console.log("Gagal memuat data", err);
  }
};


// Admin sesion
// export const AdminSesion = async() => {
//   try {
//     const res = await axios.post()
//   }
// }