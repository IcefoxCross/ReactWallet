import React, { useEffect, useState } from 'react'
import { Container } from "@material-ui/core";
import useStyles from "./ListTopupMoneyStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";

const accountId = 1;

export default function ListTopupMoneyComponent() {
    const [topupMoneyList, setTopupMoneyList] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const dataTopupMoney = await httpGetAll(`transaction/topup/account/${accountId}`)
            setTopupMoneyList(dataTopupMoney.data);
        }
        fetchAPI();
    }, []);
    const classes = useStyles();
    return (
        <Container>
            <TableComponent data={topupMoneyList} title="Ingresos"></TableComponent>
        </Container>
    )
}
