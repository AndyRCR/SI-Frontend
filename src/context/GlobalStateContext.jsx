import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const obtenerData = () =>{

        setIsLoading(true)

        fetch('http://54.90.72.87:5000/data')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }

  return (
    <GlobalContext.Provider
        value={{
            isLoading, obtenerData, data
        }}>
            {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext