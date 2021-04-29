import React, { useEffect, useState } from 'react'
import { Container, Grid } from "@material-ui/core";
import useStyles from "./ListCashOutStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";
import HeaderButtonsComponent from '../ListTopupMoney/HeaderButtonsComponent';

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
            <Grid
                container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="stretch"
                wrap="nowrap"
            >
                <Grid item container>
                    <HeaderButtonsComponent
                        text="Añadir Egreso"
                        sendTo="/createCashOut"
                    />
                </Grid>
                <Grid item container>
                    <TableComponent
                        data={cashOutList}
                        title="Egresos"
                    ></TableComponent>
                </Grid>
            </Grid>
        </Container>
    );
}
