import React from 'react'
import {
  Typography,
  Container,
  Grid,
  GridList,
  Box,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CurrencyBalance from './CurrencyBalance';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  wallets: {
    marginTop: '30px',
  }
}));

const BalanceContent = ({ arsBalance, usdBalance }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column">
        <Grid item style={{ marginBottom: '20px' }}>
          <Typography variant="h5" color="initial" data-testid="cashout-title">
            Billeteras
          </Typography>
        </Grid>
        <GridList cols={2} className={classes.wallets} style={{ marginTop: '20px' }}>
          <CurrencyBalance currency={'ARS'} currencyBalance={arsBalance} />
          <CurrencyBalance currency={'USD'} currencyBalance={usdBalance} />
        </GridList>
      </Grid>
    </Container >
  )
}

export default BalanceContent
