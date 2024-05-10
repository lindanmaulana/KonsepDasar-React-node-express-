import { useEffect, useState } from "react";
import { acount } from "../services/auth.services";
const useAcount = () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        acount().theen(value => setUsername(value))
    })

    console.log(username)
}

export default useAcount