import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
  Container, Grid
} from "@material-ui/core";
import TableComponent from './ListFixedTermDepositTable.js/TableComponent';
import HeaderButton from '../ListTopupMoney/HeaderButtonsComponent';
import { httpGetOne } from '../../services/httpServices';

function ListFixedTermDepositComponent({ user }) {
  const userId = user.user.id;
  const [fixedTerms, setFixedTerms] = useState([]);
  useEffect(() => {
    httpGetOne("fixedTermDeposits", userId).then(res => setFixedTerms(res.data));
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
          <HeaderButton
            text="Crear plazo fijo"
            sendTo="/create-ftd"
          />
        </Grid>
        <Grid item container>
          <TableComponent
            data={fixedTerms}
            title="Plazos Fijos"
          ></TableComponent>
        </Grid>
      </Grid>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ListFixedTermDepositComponent);