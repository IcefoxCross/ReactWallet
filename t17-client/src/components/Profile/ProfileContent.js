import React from 'react'
import {
  Typography,
  Container,
  Grid,
  GridList,
  Box,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import UserProfile from './UserProfile';

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

const ProfileContent = ({ arsBalance, usdBalance }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column">
        <Grid item style={{ marginBottom: '20px' }}>
          <Typography variant="h5" color="initial" data-testid="cashout-title">
            Perfil
          </Typography>
        </Grid>
        <Grid
          alignItems="center"
          justify="center">
          <UserProfile currency={'ARS'} currencyBalance={arsBalance} />
        </Grid>
      </Grid>
    </Container >
  )
}

export default ProfileContent