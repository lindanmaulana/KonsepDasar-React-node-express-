import { useEffect, useState } from "react";
import { acount, formData } from "../services/auth.services";
import { useSelector } from "react-redux";

const useAcount = () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        acount().theen(value => setUsername(value))
    })

    console.log(username)
}

export default useAcount