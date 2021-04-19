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

const validationSchema = yup.object({
    firstName: yup.string("Ingrese su nombre").required("Es necesario que ingrese su nombre"),
    lastName: yup.string("Ingrese su apellido").required("Es necesario que ingrese su apellido"),
    email: yup
        .string("Ingrese su correo")
        .email("Ingrese un correo valido")
        .required("Es necesario que ingrese su correo"),
    password: yup
        .string("Ingrese su contraseña")
        .min(6, "Su contraseña tiene que tener un minimo de 6 caracteres")
        .required("Es necesario que ingrese su contraseña"),
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
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} direction="column">
                    <Grid item>
                        <Typography variant="h5" color="initial">
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
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            size="large"
                        >
                            Registrarse
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
