import { useContext } from "react"
import { TotalClassesDispatch } from "../Context/TotalClassesContext"

export const useTotalClassesDispatch = () => {
    return useContext(TotalClassesDispatch)
}