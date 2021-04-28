import React from 'react'
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
import PaginationTable from './PaginationTable/PaginationTableComponent';
import useStyles from './TableStyles'

export default function TableComponent({list}) {
    const classes = useStyles();
    const [dataList, setDataList] = useState(list)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dataList.length - page * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    /**
     * Listado de Egreso e Ingresos
     * ============================
     * Crear vistas independientes para los listados de ingresos y egresos, utilizando el componente genérico de listado
     */
    return (
        <Container maxWidth="sm">
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="custom pagination table"
                >
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
                            ? dataList.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : dataList
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
                                count={dataList.length}
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
