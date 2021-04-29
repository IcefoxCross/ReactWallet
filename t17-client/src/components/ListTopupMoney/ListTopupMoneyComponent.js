import React, { useEffect, useState } from 'react'
import { Container, Grid } from "@material-ui/core";
import useStyles from "./ListTopupMoneyStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";
import HeaderButton from './HeaderButtonsComponent'

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
                    <HeaderButton
                        text="Añadir ingreso"
                        sendTo="/createTopupMoney"
                    />
                </Grid>
                <Grid item container>
                    <TableComponent
                        data={topupMoneyList}
                        title="Ingresos"
                    ></TableComponent>
                </Grid>
            </Grid>
        </Container>
    );
}
