import React from 'react'
import {
  Typography,
  TextField,
  Container,
  Grid,
  Button,
  MenuItem,
} from "@material-ui/core";

const SendMoneyForm = (
  { formik, accountSelected, setAccountSelected, setCurrencyAccountSelected, userArsAccount, userUsdAccount,
    selectedUserId, setSelectedUserId, users }
) => {
  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h5" color="initial">
              Enviar Dinero
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
                formik.touched.amount && formik.errors.amount
              }
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
                formik.touched.concept && formik.errors.concept
              }
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
                setCurrencyAccountSelected(e.target.value === 1 ? 'ARS' : 'USD')
              }}
              variant="outlined"
              fullWidth
            >
              <MenuItem value={userArsAccount}>Pesos</MenuItem>
              <MenuItem value={userUsdAccount}>Dolares</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              id="filled-select-account"
              select
              label="Usuario a transferir"
              value={Number(selectedUserId)}
              onChange={(e) => setSelectedUserId(e.target.value)}
              variant="outlined"
              fullWidth
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {`ID ${user.id} - ${user.firstName} ${user.lastName}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              fullWidth
            >
              Enviar
                        </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default SendMoneyForm
