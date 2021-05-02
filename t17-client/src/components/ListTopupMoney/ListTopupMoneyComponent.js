import React, { useEffect, useState } from 'react'
import { Container, Grid } from "@material-ui/core";
import useStyles from "./ListTopupMoneyStyles";
import TableComponent from '../Table/TableComponent';
import { httpGetAll } from "../../services/httpServices";
import HeaderButton from './HeaderButtonsComponent'
import { connect } from "react-redux";

function ListTopupMoneyComponent({user}) {
    const classes = useStyles();
    const [userId, setUserId] = useState(0);
    const [userArsAccount, setUserArsAccount] = useState(0);
    const [userUsdAccount, setUserUsdAccount] = useState(0);
    const [accountSelected, setAccountSelected] = useState(userArsAccount);
    const [topupMoneyList, setTopupMoneyList] = useState([])
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
                const dataTopupMoney = await httpGetAll(
                    `transaction/byType/topup/userId/${userId}`
                );
                setTopupMoneyList(dataTopupMoney.data);
            }
        }
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

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(ListTopupMoneyComponent);