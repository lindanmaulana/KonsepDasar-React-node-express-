import { useContext } from "react"
import { Interaktif } from "../../Context/InteraktifDashboard"

const BtnBack = () => {
    const {isBack, setIsBack} = useContext(Interaktif)

  return (
    <button className="fixed p-4 bg-blue-400 bottom-5 right-2 z-[999] rounded-full" onClick={() => setIsBack(!isBack)}>
        hihi
    </button>
  )
}

export default BtnBack
