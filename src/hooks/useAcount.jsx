import { useEffect, useState } from "react";
import { formData } from "../services/auth.services";
import { useSelector } from "react-redux";

export const useAcount = () => {
    const [username, setUsername] = useState('')

    const state = useSelector(state => state.cart.data.login)

    useEffect(() => {
        formData().then(res =>  res.payload)
    })

    console.log(state)
}