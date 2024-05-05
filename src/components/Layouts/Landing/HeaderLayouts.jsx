import { useState } from "react"
import LandingHeader from "../../Fragments/Landing/Header/LandingHeader"

const HeaderLayouts = () => {
    const [state, setState] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleState = () => {
        setState(!state)

        setTimeout(() => {
            setLoading(!loading)
        }, 500)
    }
  return (
    <LandingHeader title="Informatika" handleLogin={handleState} state={state} loading={loading}/>
  )
}

export default HeaderLayouts
