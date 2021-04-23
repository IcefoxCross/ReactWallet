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
  MESSAGE_STRING_FIRSTNAME,
  MESSAGE_REQUIRED_FIRSTNAME,
  MESSAGE_STRING_LASTNAME,
  MESSAGE_REQUIRED_LASTNAME,
  MESSAGE_STRING_EMAIL,
  MESSAGE_EMAIL_EMAIL,
  MESSAGE_REQUIRED_EMAIL,
  MESSAGE_STRING_PASSWORD,
  MESSAGE_MIN_PASSWORD,
  MESSAGE_REQUIRED_PASSWORD,
} from "../../constants/constants";

const validationSchema = yup.object({
  amount: yup
    .string(MESSAGE_STRING_FIRSTNAME)
    .required(MESSAGE_REQUIRED_FIRSTNAME),
  concept: yup
    .string(MESSAGE_STRING_LASTNAME)
    .required(MESSAGE_REQUIRED_LASTNAME),
  email: yup
    .string(MESSAGE_STRING_EMAIL)
    .email(MESSAGE_EMAIL_EMAIL)
    .required(MESSAGE_REQUIRED_EMAIL),
  password: yup
    .string(MESSAGE_STRING_PASSWORD)
    .min(6, MESSAGE_MIN_PASSWORD)
    .required(MESSAGE_REQUIRED_PASSWORD),
});

export default function CashOutComponent() {

  const formik = useFormik({
    initialValues: {
      amount: "",
      concept: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit} >
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography variant="h5" color="initial" data-testid="signup-title">
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
              data-testid="input-first-name"
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
              data-testid="input-last-name"
            />
          </Grid>
          <Grid item >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              data-testid="signup-button"
            >
              Registrarse
                        </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
