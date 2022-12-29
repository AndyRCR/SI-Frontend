import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(id, predictor, importancia) {
  return { id, predictor, importancia}
}

const rows = [
  createData(5, 'RM', '0.671680'),
  createData(12, 'LSTAT', '0.222326'),
  createData(7, 'DIS', '0.064816'),
  createData(0, 'CRIM', '0.034714'),
  createData(10, 'PTRATIO', '0.006465')
]

const PredictoresTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Item</TableCell>
            <TableCell align="center">Predictor</TableCell>
            <TableCell align="center">Importancia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row.id}
              </TableCell>
              <TableCell align="center">{row.predictor}</TableCell>
              <TableCell align="center">{row.importancia}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PredictoresTable