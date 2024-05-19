import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

// data kegiatan
export const getDataKegiatan = async () => {
  try {
    const res = await axios.get(`${baseUrl}/kegiatan`);

    return res.data;
  } catch (error) {
    return error;
  }
};

export const sendDataKegiatan = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/send-kegiatan`, data);

    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteDataKegiatan = async (data) => {
  try {
    const res = await axios.put(`${baseUrl}/delete-kegiatan`, data);

    return res.data;
  } catch (error) {
    return error;
  }
};

// hit API data all
// students
export const getDataStudents = async () => {
  try {
    const res = await axios.get(`${baseUrl}/dashboard/students`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendDataStudents = async (data) => {
  try {
    if(data.nama.trim() === "" || data.asalDesa.trim() === "" || data.asalKota.trim() === "") {

      return ("Data yang di input salah!!")
    } else {
      const res = await axios.post(`${baseUrl}/dashboard/students/add`, data);
  
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const deleteDataStudents = async (data) => {
  try {
    const res = await axios.put(`${baseUrl}/dashboard/students/delete`, data);

    return res.data
  } catch (error) {
    return (error, "Data gagal di hapus");
  }
};

//   college lesson
export const getDataCollegeLeson = async () => {
  try {
    const res = await axios.get(`${baseUrl}/dashboard/college-lesson`);

    return res.data;
  } catch (error) {
    return error;
  }
};

// hit API jumlah
export const amountDataStudents = async () => {
  try {
    const res = await axios.get(`${baseUrl}/amount-students`);

    return res;
  } catch (error) {
    return error;
  }
};

export const amountDataClasses = async () => {
  try {
    const res = await axios.get(`${baseUrl}/amount-classes`);

    return res;
  } catch (error) {
    return error;
  }
};

export const amountDataCollegeLesson = async () => {
  try {
    const res = await axios.get(`${baseUrl}/amount-college-lesson`);

    return res;
  } catch (error) {
    return error;
  }
};
