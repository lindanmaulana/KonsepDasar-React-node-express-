import { useContext } from "react"
import { TotalClasses } from "../Context/TotalClassesContext"

export const useTotalClasses = () => {
    return useContext(TotalClasses)
}