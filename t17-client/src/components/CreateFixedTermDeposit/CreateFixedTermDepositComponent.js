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
  MESSAGE_REQUIRED_FTD_AMMOUNT,
  MESSAGE_NOT_A_NUMBER,
  MESSAGE_NEGATIVE_NUMBER,
  MESSAGE_MAXIMUM_VALUE,
} from "../../constants/constants";
import CreateFixedTermDepositHooks from "./CreateFixedTermDepositHooks";

export default function CreateFixedTermDepositComponent() {

  const userAccountAmount = CreateFixedTermDepositHooks().userAccountAmount;

  const validationSchema = yup.object({
    ftdAmount: yup
      .number().typeError(MESSAGE_NOT_A_NUMBER)
      .positive(MESSAGE_NEGATIVE_NUMBER)
      .max(userAccountAmount, MESSAGE_MAXIMUM_VALUE)
      .required(MESSAGE_REQUIRED_FTD_AMMOUNT),
  });

  const formik = useFormik({
    initialValues: {
      ftdAmount: "",
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
            <Typography variant="h5" color="initial" data-testid="create-ftd-title">
              Crear Plazo Fijo
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="ftdAmount"
              name="ftdAmount"
              label="Monto"
              variant="outlined"
              fullWidth
              value={formik.values.ftdAmount}
              onChange={formik.handleChange}
              error={
                formik.touched.ftdAmount &&
                Boolean(formik.errors.ftdAmount)
              }
              helperText={
                formik.touched.ftdAmount &&
                formik.errors.ftdAmount
              }
              data-testid="input-amount"
            />
          </Grid>
          <Grid item >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              data-testid="create-ftd-button"
            >
              Crear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
