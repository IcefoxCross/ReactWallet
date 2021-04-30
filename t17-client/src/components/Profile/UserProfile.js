import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  marginCard: {
    marginBottom: '30px',
  },
});

export default function UserProfile({ userInfo }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.marginCard}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              ID {userInfo.id}
            </Typography>
            <Typography variant="h5" component="h2">
              {userInfo.firstName} {userInfo.lastName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {userInfo.email}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small">
              <Link to="/billeteras" style={{ textDecoration: 'none' }}>
                Ver cuentas
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}