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
} from "@material-ui/core";
import {
    MESSAGE_STRING_EMAIL,
    MESSAGE_EMAIL_EMAIL,
    MESSAGE_REQUIRED_EMAIL,
    MESSAGE_STRING_PASSWORD,
    MESSAGE_MIN_PASSWORD,
    MESSAGE_REQUIRED_PASSWORD,
    URL_LOGIN,
    MESSAGE_LOGIN_FAILED,
    MESSAGE_LOGIN_SUCCESS
} from "../../constants/constants";
import NotRegisteredComponent from './NotRegisteredComponent';
import { httpPost } from '../../services/httpServices';
import updateUser from "../../store/user/action";
import { connect } from 'react-redux';

function FormLoginComponent(props) {
    const history = useHistory();

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
        setSubmitting(true);
        httpPost(URL_LOGIN, values)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                alert(MESSAGE_LOGIN_SUCCESS);
                history.push("/home");
                props.updateUser('Datos_usuario') // Agregar info real del usuario
            }).catch(err => {
                alert(MESSAGE_LOGIN_FAILED);
                setSubmitting(false);
            });
    };

    const formik = useFormik({
        initialValues, validationSchema, onSubmit
    });

    const [submitting, setSubmitting] = useState(false);

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
                    <Grid item>
                        <NotRegisteredComponent />
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
                            Ingresar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(null, { updateUser })(FormLoginComponent);
