import React, { useEffect, useState } from 'react'
import { Container } from "@material-ui/core";
import useStyles from "./ListCashOutStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";

const accountId = 1;

export default function ListCashOutComponent() {
    const classes = useStyles();
    const [cashOutList, setCashOutList] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const dataCashOutList = await httpGetAll(`transaction/payment/account/${accountId}`)
            setCashOutList(dataCashOutList.data);
        }
        fetchAPI();
    }, []);
    return (
        <Container>
            <TableComponent data={cashOutList} title="Egresos"></TableComponent>
        </Container>
    )
}
