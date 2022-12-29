import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import ResultContainer from '../ResultContainer/ResultContainer'
import './AppContainer.css'

const AppContainer = () => {

  const {obtenerData} = useContext(GlobalContext)

  return (
    <div className='appContainer'>
      <div className="buttonContainer">
          <button onClick={obtenerData}>Obtener data</button>
      </div>
      <ResultContainer/>
    </div>
  )
}

export default AppContainer