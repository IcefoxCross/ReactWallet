import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as yup  from 'yup'
import {
    Typography,
    TextField,
    Container,
    Grid,
    Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createTransaction } from '../CashOut/services/CashOutServices';
import { SuccessAlertComponent } from '../Alerts/AlertsComponent';
import {
    MESSAGE_LOGIN_SUCCESS,
} from "../../constants/constants";
import { useHistory } from 'react-router';

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

function FormTopupMoneyComponent({ user }) {
    const [userId, setUserId] = useState(0);
    const [userArsAccount, setUserArsAccount] = useState(0);
    const [userUsdAccount, setUserUsdAccount] = useState(0);
    const [accountSelected, setAccountSelected] = useState(userArsAccount);
    const history = useHistory()
    useEffect(() => {
        setUserId(user.user.id);
    }, []);

    useEffect(() => {
        setUserArsAccount(userId * 2 - 1);
        setUserUsdAccount(userId * 2);
    }, [userId]);

    useEffect(() => {
        setAccountSelected(userArsAccount);
    }, [userArsAccount]);

    const formik = useFormik({
        initialValues: {
            amount: "",
            concept: "",
            type: "topup",
            dateTime: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            values.type = "topup";
            values.accountId = accountSelected;
            updateDate();
            createTransaction(values)
            resetForm({ values: "" })
            SuccessAlertComponent(MESSAGE_LOGIN_SUCCESS).then(() =>
                history.push("/listTopupMoney")
            );
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

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(FormTopupMoneyComponent);