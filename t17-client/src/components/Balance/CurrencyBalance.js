import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardContent: {
    marginTop: '20px',
  },
  positiveNumber: {
    color: 'lime',
  },
  negativeNumber: {
    color: 'red',
  },
  currencyCard: {
    marginTop: '30px',
    fontSize: '22px',
  },
});

export default function CurrencyBalance({ currency, currencyBalance }) {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={6}>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Grid container direction="row">
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={3} >
              <Typography className={currencyBalance >= 0 ? classes.positiveNumber : classes.negativeNumber}
                variant="h2">
                $
            </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography
                className={currencyBalance >= 0 ? classes.positiveNumber : classes.negativeNumber}
                variant="h2">
                {currencyBalance}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography color="textSecondary" className={classes.currencyCard}>
                {currency}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={1} />
          </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Link to="/topup" style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Cargar dinero
        </Button>
          </Link>
          <Link to="/cashout" style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Retirar dinero
        </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}