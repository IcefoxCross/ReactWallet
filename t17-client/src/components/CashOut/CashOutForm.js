import React from 'react'
import {
  Typography,
  TextField,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

const CashOutForm = ({ formik, accountSelected, userArsAccount, userUsdAccount, setAccountSelected }) => {
  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit} >
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h5" color="initial" data-testid="cashout-title">
              Retirar Dinero
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
              id="concept"
              name="concept"
              label="Concepto"
              variant="outlined"
              fullWidth
              value={formik.values.concept}
              onChange={formik.handleChange}
              error={
                formik.touched.concept &&
                Boolean(formik.errors.concept)
              }
              helperText={
                formik.touched.concept &&
                formik.errors.concept
              }
              data-testid="input-concept"
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-select-currency"
              select
              label="Cuenta"
              value={accountSelected}
              onChange={(e) => setAccountSelected(e.target.value)}
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
              Retirar
          </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default CashOutForm
