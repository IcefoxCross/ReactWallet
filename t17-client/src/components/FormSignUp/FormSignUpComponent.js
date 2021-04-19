import React from 'react'
import ReactDOM from 'react-dom';
import { useFormik  } from 'formik';
import * as Yup from 'yup';
import {Typography, TextField, Container, Grid} from '@material-ui/core';



export default function FormSignUpComponent() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={1} direction="column">
                <Typography variant="h5" color="initial">
                    Registrarse
                </Typography>
                <TextField
                    id="firstName"
                    label="firstName"
                    value={"firstName"}
                    //   onChange={}
                />
                <TextField
                    id="lastName"
                    label="lastName"
                    value={"lastName"}
                    //   onChange={}
                />
                <TextField
                    id="email"
                    label="email"
                    value={"email"}
                    //   onChange={}
                />
                <TextField
                    id="password"
                    label="password"
                    value={"password"}
                    //   onChange={}
                />
            </Grid>
        </Container>
    );
}
