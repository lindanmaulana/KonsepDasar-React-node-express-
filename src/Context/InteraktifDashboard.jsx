import {createContext, useState} from 'react'

const InteraktifContext = createContext()

const InteraktifContextProvider = (props) => {
    const {children} = props

    const [isBack, setIsBack] = useState(false)

    return(
        <InteraktifContext.Provider value={{isBack, setIsBack}}>
            {children}
        </InteraktifContext.Provider>
    )
}

export const Interaktif = InteraktifContext
export default InteraktifContextProvider