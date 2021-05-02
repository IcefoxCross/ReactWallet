import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container, Typography, TableFooter, TablePagination, Grid
} from "@material-ui/core";
import useStyles from './ListFixedTermDepositStyles'
import TableComponent from './TableComponent';
import HeaderButton from '../ListTopupMoney/HeaderButtonsComponent';
import PaginationTable from './PaginationTable/PaginationTableComponent';
import { httpGetOne } from '../../services/httpServices';

function ListFixedTermDepositComponent({ user }) {
  const userId = user.user.id;
  const classes = useStyles();
  const [fixedTerms, setFixedTerms] = useState([]);
  useEffect(() => {
    httpGetOne("fixedTermDeposits", userId).then(res => setFixedTerms(res.data));
  }, []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, fixedTerms.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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