import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#F15F24',
    color: '#fff',
  },
  body: {
    fontSize: 14,
  },
  tableRightBorder: { 
    borderWidth: 1, 
    borderColor: 'red',
    borderStyle: 'solid'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', ),
  createData('2', ),
  createData('3', ),
  createData('4', ),
  createData('5', ),
  createData('6', )
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Period</StyledTableCell>
            <StyledTableCell align="center">Monday</StyledTableCell>
            <StyledTableCell align="center">Tuesday</StyledTableCell>
            <StyledTableCell align="center">Wednesday</StyledTableCell>
            <StyledTableCell align="center">Thursday</StyledTableCell>
            <StyledTableCell align="center">Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}