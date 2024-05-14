import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL
// hit API data all
export const getDataStudents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/dashboard/students`)
  
      return res.data
    } catch (error) {
      console.log(error);
    }
  };

  export const getDataCollegeLeson = async () => {
    try {
        const res = await axios.get(`${baseUrl}/dashboard/college-lesson`)

        return res.data
    } catch(error) {
        return(error)
    }
  }
  

// hit API jumlah
export const amountDataStudents = async() => {
    try {
        const res = await axios.get(`${baseUrl}/amount-students`)

        return res
    } catch(error) {
        return error
    }
}

export const amountDataClasses = async () => {
    try {
        const res = await axios.get(`${baseUrl}/amount-classes`)

        return res
    } catch(error) {
        return error
    }
}

export const amountDataCollegeLesson = async () => {
    try {
        const res = await axios.get(`${baseUrl}/amount-college-lesson`)

        return res
    }catch(error) {
        return error
    }
}