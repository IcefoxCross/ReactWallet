import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import PaginationTable from '../PaginationTable/PaginationTableComponent';
import useStyles from './TableStyles'

export default function TableComponent({ data, title }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("es-AR", options);
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow>
              <TableCell colSpan={6}>
                <Typography
                  variant="subtitle1"
                  color="initial"
                  className={classes.tableTitle}
                >
                  {title}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={classes.columnTitle}>Cantidad</TableCell>
              <TableCell align="center" className={classes.columnTitle}>Moneda</TableCell>
              <TableCell align="center" className={classes.columnTitle}>Fecha de Creación</TableCell>
              <TableCell align="center" className={classes.columnTitle}>Fecha de Cierre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              : data
            ).map((element, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                >
                  {element.amount}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                >
                  {element.type === null
                    ? "-"
                    : element.currencyType}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                >
                  {formatDate(element.createdAt)}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                >
                  {(element.closingDate === null ? '-' : formatDate(element.closingDate))}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                classes={{
                  spacer: classes.spacer,
                  root: classes.root,
                }}
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: "All", value: -1 },
                ]}
                colSpan={6}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="Lineas"
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={PaginationTable}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}
