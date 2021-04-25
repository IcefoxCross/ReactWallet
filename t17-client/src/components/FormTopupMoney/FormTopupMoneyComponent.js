import React from 'react'
import { useFormik } from "formik";
import * as yup  from 'yup'
import {
    Typography,
    TextField,
    Container,
    Grid,
    Button,
} from "@material-ui/core";

const validationSchema = yup.object().shape({
    amount: yup
        .number()
        .typeError("Solo se permiten numeros")
        .positive("No puede ser negativo")
        .required("Es necesario que ingrese un monto"),
    concept: yup
        .string("Ingrese el concepto")
        .required("Es necesario que ingrese un concepto"),
});

export default function FormTopupMoneyComponent() {
    const formik = useFormik({
        initialValues: {
            amount: "",
            concept: "",
            type: "topup",
            dateTime: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateDate();
            alert(JSON.stringify(values, null, 2));
        },
    });
    const updateDate = () => (formik.values.dateTime = new Date());

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <Typography variant="h5" color="initial">
                            Depositar Dinero
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
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            size="large"
                            fullWidth
                        >
                            Aceptar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
