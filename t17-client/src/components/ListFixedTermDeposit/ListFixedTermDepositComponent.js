import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container, Typography, TableFooter, TablePagination
} from "@material-ui/core";
import useStyles from './ListFixedTermDepositStyles'
import PaginationTable from './PaginationTable/PaginationTableComponent';

/**
 * Componente para listado de plazos fijos
 * TODO:Crear un componente para listar los plazos fijos cargados en el sistema para el usuario
 */

const datafixedTerms = [
    { amount: 100, closinng_date: "2021-04-21" },
    { amount: 200, closinng_date: "2021-04-20" },
    { amount: 300, closinng_date: "2021-03-01" },
    { amount: 300, closinng_date: "2021-03-01" },
    { amount: 300, closinng_date: "2021-03-01" },
    { amount: 600, closinng_date: null },
    { amount: 3000, closinng_date: null },
    { amount: 1000, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 3000, closinng_date: null },
    { amount: 1000, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 3000, closinng_date: null },
    { amount: 1000, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: "2021-03-01" },
    { amount: 1300, closinng_date: null },
    { amount: 1300, closinng_date: "2021-03-01" },
];

export default function ListFixedTermDepositComponent() {
    const classes = useStyles();
    const [fixedTerms, setFixedTerms] = useState([]);
    useEffect(() => {
        setFixedTerms(datafixedTerms); //TODO: Conexion con enpoint
    }, []);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, fixedTerms.length - page * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Container maxWidth="sm">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={3}>
                                <Typography
                                    variant="subtitle1"
                                    color="initial"
                                    className={classes.tableTitle}
                                >
                                    Plazos Fijos
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Monto</TableCell>
                            <TableCell align="center">
                                Fecha de cierre
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? fixedTerms.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : fixedTerms
                        ).map((element, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {element.amount}
                                </TableCell>
                                <TableCell align="center">
                                    {element.closinng_date === null
                                        ? "-"
                                        : element.closinng_date}
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
                                colSpan={3}
                                count={fixedTerms.length}
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