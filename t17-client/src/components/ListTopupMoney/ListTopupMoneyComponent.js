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

const userId = 1;
const accountId = 1;

const dataTopupMoney = [
    {
        id: 1,
        amount: "1200",
        concept:"Ingreso numero 1",
        type: "topup",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
    {
        id: 2,
        amount: "100",
        concept: "Ingreso numero 2",
        type: "topup",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
    {
        id: 3,
        amount: "1000",
        concept: "Ingreso numero 3",
        type: "topup",
        accountId: accountId,
        createdAt: (new Date()).toISOString(),
        updatedAt: (new Date()).toISOString(),
    },
];

export default function ListTopupMoneyComponent() {
    const [topupMoneyList, setTopupMoneyList] = useState([])
    useEffect(() => {
        // const fetchAPI = async () => {
        //     const dataTopupMoney = await httpGetOne("topupMoney",userId)
        //     setTopupMoneyList(dataTopupMoney.data);
        // }
        // fetchAPI();
        setTopupMoneyList(dataTopupMoney);
    }, []);
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <TableComponent data={topupMoneyList} title="Ingresos"></TableComponent>
        </Container>
    )
}
