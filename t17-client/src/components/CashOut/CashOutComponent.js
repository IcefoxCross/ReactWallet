import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Typography,
  TextField,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import {
  MESSAGE_REQUIRED_CASHOUT_AMMOUNT,
  MESSAGE_NOT_A_NUMBER,
  MESSAGE_NEGATIVE_NUMBER,
  MESSAGE_MAXIMUM_VALUE,
  MESSAGE_STRING_CONCEPT,
  MESSAGE_REQUIRED_CONCEPT,
} from "../../constants/constants";
import { createTransaction } from "./services/CashOutServices";
import Swal from 'sweetalert2'

export default function CreateFixedTermDepositComponent() {
  const userAccountAmount = 5000 // To do: Get real Account balance

  const validationSchema = yup.object({
    amount: yup
      .number().typeError(MESSAGE_NOT_A_NUMBER)
      .positive(MESSAGE_NEGATIVE_NUMBER)
      .max(userAccountAmount, MESSAGE_MAXIMUM_VALUE)
      .required(MESSAGE_REQUIRED_CASHOUT_AMMOUNT),
    concept: yup
      .string(MESSAGE_STRING_CONCEPT)
      .required(MESSAGE_REQUIRED_CONCEPT),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      concept: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.type = 'payment';
      values.accountId = 1;
      values.createdAt = new Date();
      values.updatedAt = new Date();
      createTransaction(values) // To do: Disminuir la cuenta bancaria del user segun lo retirado.
      resetForm({ values: '' })
      Swal.fire(
        '¡Exito!',
        'Transacción realizada.',
        'success'
      )
    },
  });

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
  );
}
