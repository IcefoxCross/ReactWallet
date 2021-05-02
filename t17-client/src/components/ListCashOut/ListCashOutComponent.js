import React, { useEffect, useState } from 'react'
import { Container, Grid } from "@material-ui/core";
import useStyles from "./ListCashOutStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";
import HeaderButtonsComponent from '../ListTopupMoney/HeaderButtonsComponent';
import { connect } from "react-redux";

function ListCashOutComponent({ user }) {
    const classes = useStyles();
    const [userId, setUserId] = useState(0);
    const [userArsAccount, setUserArsAccount] = useState(0);
    const [userUsdAccount, setUserUsdAccount] = useState(0);
    const [accountSelected, setAccountSelected] = useState(userArsAccount);
    const [cashOutList, setCashOutList] = useState([]);
    useEffect(() => {
        setUserId(user.user.id);
    }, [userId]);

    useEffect(() => {
        setUserArsAccount(userId * 2 - 1);
        setUserUsdAccount(userId * 2);
    }, [userId]);

    useEffect(() => {
        setAccountSelected(userArsAccount);
    }, [userArsAccount]);

    useEffect(() => {
        const fetchAPI = async () => {
            if(userId!==0) {
                const dataCashOutList = await httpGetAll(
                    `transaction/byType/payment/userId/${userId}`
                );
                setCashOutList(dataCashOutList.data);
            }
        };
        fetchAPI();
    }, [userId]);
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

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(ListCashOutComponent);