import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import PredictoresTable from '../PredictoresTable/PredictoresTable'
import Modelo from '../ThreeText/Modelo'
import './ResultContainer.css'

const ResultContainer = () => {

    const {data, isLoading} = useContext(GlobalContext)

  return (
    <div className='resultContainer'
    style={data === null
        ? {
            display: 'flex',
            justifyContent: 'center'
        } : {}}>
        {isLoading ? (
            <div className='resultados'>
            {data !== null ? (
                <>
                    <div className="modelo">
                        <h3>Estructura de árbol inicial</h3>
                        <Modelo modelo={{
                            modelo: data.textoModeloInicial,
                            img: 'https://bucket-si.s3.amazonaws.com/arbol_inicial.png'
                        }}/>
                    </div>

                    <div style={{width: 'calc(100% / 3)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className='tableContainer'>
                            <h3 style={{margin: '5px 0 20px'}}>Importancia de los predictores en el modelo</h3>
                            <PredictoresTable/>
                        </div>
                        

                        <div className='imagen' style={{margin: '50px 0'}}>
                            <img src='https://bucket-si.s3.amazonaws.com/graph_img.png' alt="graficoAlpha"/>
                        </div>
                    </div>

                    <div className="modelo">
                        <h3>Estructura de árbol final</h3>
                        <Modelo modelo={{
                            modelo: data.textoModeloFinal,
                            img: 'https://bucket-si.s3.amazonaws.com/arbol_final.png'
                        }}/>
                        <div className='conclusiones'>
                            <p>El error rmse del modelo es: <b>{data.rmseInicial}</b></p>
                            <p>El error rmse del modelo al aplicar pruning es: <b>{data.rmseFinal}</b></p>
                        </div>
                    </div>
                </>
            ) : (
                <Box sx={{ display: 'flex'}}>
                    <CircularProgress />
                </Box>
            )}
        </div>
        ) : false}
        
    </div>
  )
}

export default ResultContainer