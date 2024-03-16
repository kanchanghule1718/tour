import { useContext } from "react"
import { ThemeContext } from "../context/LikeContext"

export const useLike = () => {
    const context = useContext(ThemeContext)
    return context
}