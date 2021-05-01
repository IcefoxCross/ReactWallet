import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  sameRowText: {
    display: 'inline-block',
  },
  negativeBalance: {
    color: 'red',
  },
  positiveBalance: {
    color: 'lime',
  },
  currencyColumn: {
    marginLeft: '10px',
  },
  marginCard: {
    marginBottom: '20px',
  },
});

export default function CurrencyBalance({ currency, currencyBalance, accountId }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.marginCard}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Cuenta {currency === 'ARS' ? 'PESOS' : ''} {currency === 'USD' ? 'DÓLARES' : ''}
            </Typography>
            <Typography variant="h3" component="h2" className=
              {`${classes.sameRowText} ${currencyBalance >= 0 ? classes.positiveBalance : classes.negativeBalance}`}>
              $
          </Typography>
            <Typography variant="h3" component="h2" className=
              {`${classes.sameRowText} ${currencyBalance >= 0 ? classes.positiveBalance : classes.negativeBalance}`}>
              {currencyBalance}
            </Typography>
            <Typography color="textSecondary" className={`${classes.sameRowText} ${classes.currencyColumn}`}>
              {currency}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}