import React from 'react'
import formatThree from '../../tools/FormatThree'
import './Modelo.css'

const Modelo = ({modelo}) => {

  return (
    <div>
        <div className='textModel' dangerouslySetInnerHTML={{ __html: `${formatThree(modelo.modelo)}` }} />
        <img src={modelo.img} alt='modeloArbol' />
    </div>
  )
}

export default Modelo