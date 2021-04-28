import React, { useEffect, useState } from 'react'
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
import useStyles from "./ListTopupMoneyStyles";

export default function ListTopupMoneyComponent() {
    const [topupMoneyList, setTopupMoneyList] = useState([])
    useEffect(() => {
        //Usar endpoint para traer ingresos de dinero
        setTopupMoneyList(topupMoneyList);
    }, []);
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <TableComponent list={topupMoneyList}></TableComponent>
        </Container>
    )
}
