import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL

export const amountDataStudents = async() => {
    try {
        const res = await axios.get(`${baseUrl}/amount`)

        return res
    } catch(error) {
        return error
    }
}