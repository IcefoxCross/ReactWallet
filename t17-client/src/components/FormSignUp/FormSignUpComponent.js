import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import {
    Typography,
    TextField,
    Container,
    Grid,
    Button,
    Paper,
    Box,
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
    MESSAGE_REGISTER_FAILED,
    MESSAGE_REGISTER_SUCCESS,
    URL_REGISTER
} from "../../constants/constants";
import { httpPost } from '../../services/httpServices';
import { SuccessAlertComponent, ErrorAlertComponent } from '../Alerts/AlertsComponent';

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

    const history = useHistory();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (values) => {
        setSubmitting(true);
        httpPost(URL_REGISTER, values)
            .then(res => {
                SuccessAlertComponent(MESSAGE_REGISTER_SUCCESS).then(() => history.push("/login"));
            }).catch(err => {
                ErrorAlertComponent(MESSAGE_REGISTER_FAILED).then(() => setSubmitting(false));
            });
    };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <Container maxWidth="sm">
            <Paper>
                <Box px={3}>
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
                                    label="Contrase??a"
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
                                    disabled={submitting}
                                >
                                    Registrarse
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </Container>
    );
}
