import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup'
import { connect } from "react-redux";
import { SuccessAlertComponent } from '../Alerts/AlertsComponent';
import {
  SENDMONEY_SUCCESS,
} from "../../constants/constants";
import { useHistory } from 'react-router';
import { httpGetAll, httpPost } from '../../services/httpServices';
import SendMoneyForm from './SendMoneyForm';

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
      SuccessAlertComponent(SENDMONEY_SUCCESS).then(() =>
        history.push("/listTopupMoney")
      );
    },
  });
  const updateDate = () => (formik.values.dateTime = new Date());

  return (
    <SendMoneyForm formik={formik} accountSelected={accountSelected} setAccountSelected={setAccountSelected}
      setCurrencyAccountSelected={setCurrencyAccountSelected} userArsAccount={userArsAccount}
      userUsdAccount={userUsdAccount} selectedUserId={selectedUserId}
      setSelectedUserId={setSelectedUserId} users={users} />
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(SendMoneyComponent);