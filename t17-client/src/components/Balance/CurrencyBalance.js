import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  positiveNumber: {
    color: 'green',
  },
  negativeNumber: {
    color: '#e60000',
  },
});

export default function CurrencyBalance({ currency, currencyBalance }) {
  const classes = useStyles();

  return (
    <Grid container xs={12} sm={6}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
            {currency}
          </Typography>
          <Typography
            className={currencyBalance >= 0 ? classes.positiveNumber : classes.negativeNumber}
            variant="h3">
            {currencyBalance}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Link href="/topup">
            <Button size="small" color="primary">
              Cargar dinero
        </Button>
          </Link>
          <Link href="/cashout">
            <Button size="small" color="primary">
              Retirar dinero
        </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}