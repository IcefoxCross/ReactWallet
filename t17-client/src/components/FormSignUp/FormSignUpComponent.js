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
    firstName: yup
        .string(MESSAGE_STRING_FIRSTNAME)
        .required(MESSAGE_REQUIRED_FIRSTNAME),
    lastName: yup
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

export default function FormSignUpComponent() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
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
                            Registro
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.firstName &&
                                Boolean(formik.errors.firstName)
                            }
                            helperText={
                                formik.touched.firstName &&
                                formik.errors.firstName
                            }
                            data-testid="input-first-name"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Apellido"
                            variant="outlined"
                            fullWidth
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.lastName &&
                                Boolean(formik.errors.lastName)
                            }
                            helperText={
                                formik.touched.lastName &&
                                formik.errors.lastName
                            }
                            data-testid="input-last-name"
                        />
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
                            Registrarse
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
