import React from 'react'
import {
  Typography,
  TextField,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateFixedTermDepositForm = (
  { formik, accountSelected, userArsAccount, userUsdAccount, setAccountSelected, setBalanceSelected,
    userArsBalance, userUsdBalance }
) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit} >
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h5" color="initial" data-testid="cashout-title">
              Crear plazo fijo
          </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="amount"
              name="amount"
              label="Monto"
              variant="outlined"
              fullWidth
              value={formik.values.amount}
              onChange={formik.handleChange}
              error={
                formik.touched.amount &&
                Boolean(formik.errors.amount)
              }
              helperText={
                formik.touched.amount &&
                formik.errors.amount
              }
              data-testid="input-amount"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-select-currency"
              select
              label="Cuenta"
              value={accountSelected}
              onChange={(e) => {
                setAccountSelected(e.target.value);
                e.target.value === userArsAccount ? setBalanceSelected(userArsBalance)
                  : setBalanceSelected(userUsdBalance)
              }}
              variant="outlined"
              fullWidth
            >
              <MenuItem value={userArsAccount}>Pesos</MenuItem>
              <MenuItem value={userUsdAccount}>Dolares</MenuItem>
            </TextField>
          </Grid>
          <Grid item >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              data-testid="cashout-button"
            >
              Crear
          </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default CreateFixedTermDepositForm
