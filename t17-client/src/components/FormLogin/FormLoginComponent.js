import React from "react";
import { useHistory } from 'react-router-dom';
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
    MESSAGE_STRING_EMAIL,
    MESSAGE_EMAIL_EMAIL,
    MESSAGE_REQUIRED_EMAIL,
    MESSAGE_STRING_PASSWORD,
    MESSAGE_MIN_PASSWORD,
    MESSAGE_REQUIRED_PASSWORD,
} from "../../constants/constants";

export default function FormLoginComponent() {
    const validationSchema = yup.object({
        email: yup
            .string(MESSAGE_STRING_EMAIL)
            .email(MESSAGE_EMAIL_EMAIL)
            .required(MESSAGE_REQUIRED_EMAIL),
        password: yup
            .string(MESSAGE_STRING_PASSWORD)
            .min(6, MESSAGE_MIN_PASSWORD)
            .required(MESSAGE_REQUIRED_PASSWORD),
    });

    const initialValues = {
        email: "",
        password: ""
    };

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    const formik = useFormik({
        initialValues, validationSchema, onSubmit
    });

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit} >
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <Typography variant="h5" color="initial" data-testid="signup-title">
                            Ingreso
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            name="email"
                            label="Correo"
                            variant="outlined"
                            fullWidth
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            data-testid="input-email"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="password"
                            name="password"
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            data-testid="input-password"
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
                            Ingresar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}