import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup'
import {
  Typography,
  TextField,
  Container,
  Grid,
  Button,
  MenuItem,
} from "@material-ui/core";
import { connect } from "react-redux";
import { SuccessAlertComponent } from '../Alerts/AlertsComponent';
import {
  MESSAGE_LOGIN_SUCCESS,
} from "../../constants/constants";
import { useHistory } from 'react-router';
import { httpGetAll, httpPost } from '../../services/httpServices';

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

function SendMoneyComponent({ user }) {
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [userArsAccount, setUserArsAccount] = useState(0);
  const [userUsdAccount, setUserUsdAccount] = useState(0);;
  const [userToSendArsAccount, setUserToSendArsAccount] = useState(0);
  const [userToSendUsdAccount, setUserToSendUsdAccount] = useState(0);
  const [currencyAccountSelected, setCurrencyAccountSelected] = useState('')
  const [accountSelected, setAccountSelected] = useState(userArsAccount);
  const [accountToSendSelected, setAccountToSendSelected] = useState(userToSendArsAccount);
  const history = useHistory();

  useEffect(() => {
    setUserId(user.user.id);
  }, []);

  useEffect(() => {
    httpGetAll('users').then(res => setUsers(res.data.filter(i => userId !== (i.id))))
    setUserArsAccount(userId * 2 - 1);
    setUserUsdAccount(userId * 2);
  }, [userId]);

  useEffect(() => {
    setAccountSelected(userArsAccount);
    setCurrencyAccountSelected('ARS')
  }, [userArsAccount]);

  useEffect(() => {
    setAccountToSendSelected(currencyAccountSelected === 'ARS' ? userToSendArsAccount : userToSendUsdAccount)
  }, [currencyAccountSelected])

  useEffect(() => {
    setUserToSendArsAccount(selectedUserId * 2 - 1);
    setUserToSendUsdAccount(selectedUserId * 2);
  }, [selectedUserId])

  useEffect(() => {
    setAccountToSendSelected(currencyAccountSelected === 'ARS' ? userToSendArsAccount : userToSendUsdAccount)
  }, [userToSendArsAccount, userToSendUsdAccount])

  useEffect(() => {
    console.log(accountToSendSelected)
  }, [accountToSendSelected])

  const formik = useFormik({
    initialValues: {
      amount: "",
      concept: "",
      type: "payment",
      dateTime: "",
      accountId: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.type = "topup";
      values.accountId = accountSelected;
      updateDate();
      const dataPost = {
        amount: values.amount,
        concept: `TRANSFERENCIA A ID ${selectedUserId} - ${values.concept}`,
        type: "payment",
        accountId: values.accountId,
        createAd: values.createdAt,
        updatedAt: values.updatedAt,
      };
      const dataPostReceive = {
        amount: values.amount,
        concept: `TRANSFERENCIA DE ID ${userId} - ${values.concept}`,
        type: "topup",
        accountId: accountToSendSelected,
        createAd: values.createdAt,
        updatedAt: values.updatedAt,
      }
      httpPost("transaction", dataPost);
      httpPost("transaction", dataPostReceive);
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
              Enviar Dinero
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
            <TextField
              id="filled-select-currency"
              select
              label="Cuenta"
              value={accountSelected}
              onChange={(e) => {
                setAccountSelected(e.target.value);
                setCurrencyAccountSelected(e.target.value === 1 ? 'ARS' : 'USD')
              }}
              variant="outlined"
              fullWidth
            >
              <MenuItem value={userArsAccount}>Pesos</MenuItem>
              <MenuItem value={userUsdAccount}>Dolares</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              id="filled-select-account"
              select
              label="Usuario a transferir"
              value={Number(selectedUserId)}
              onChange={(e) => setSelectedUserId(e.target.value)}
              variant="outlined"
              fullWidth
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {`ID ${user.id} - ${user.firstName} ${user.lastName}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              fullWidth
            >
              Enviar
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

export default connect(mapStateToProps)(SendMoneyComponent);