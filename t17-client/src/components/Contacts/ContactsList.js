import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
  Container, Grid
} from "@material-ui/core";
import TableComponent from './ContactsTable/TableComponent';
import HeaderButton from '../ListTopupMoney/HeaderButtonsComponent';
import { httpGetAll } from '../../services/httpServices';

function ContactsList({ user }) {
  const userId = user.user.id;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    httpGetAll("users").then(res => setUsers(res.data.filter(i => userId !== (i.id))));
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
          <TableComponent
            data={users}
            title="Contactos"
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

export default connect(mapStateToProps)(ContactsList);