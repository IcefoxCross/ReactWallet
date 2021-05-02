import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  MESSAGE_REQUIRED_CASHOUT_AMMOUNT,
  MESSAGE_NOT_A_NUMBER,
  MESSAGE_NEGATIVE_NUMBER,
  MESSAGE_LOGIN_SUCCESS,
  MESSAGE_NOT_ENOUGH_MONEY,
} from "../../constants/constants";
import CreateFixedTermDepositForm from "./CreateFixedTermDepositForm";
import { SuccessAlertComponent } from "../Alerts/AlertsComponent";
import { useHistory } from "react-router";
import { httpPost, httpGetOne } from "../../services/httpServices";

function CreateFixedTermDepositComponent({ user }) {
  const [userId, setUserId] = useState(0);
  const [userArsAccount, setUserArsAccount] = useState(0);
  const [userUsdAccount, setUserUsdAccount] = useState(0);
  const [userArsBalance, setUserArsBalance] = useState(0);
  const [userUsdBalance, setUserUsdBalance] = useState(0);
  const [balanceSelected, setBalanceSelected] = useState(userArsBalance);
  const [accountSelected, setAccountSelected] = useState(userArsAccount);
  const history = useHistory()

  useEffect(() => { // Sets userId to redux user state Id.
    setUserId(user?.user?.id);
  }, []);

  useEffect(() => { // Gets user accounts id and sets its id's.
    httpGetOne('account', userId).then(res => {
      if (res.data[0]?.id && res.data[1]?.id)
        setUserArsAccount(res.data[0]?.id);
      setUserUsdAccount(res.data[1]?.id);
    })
  }, [userId]);

  useEffect(() => { // Sets default account selected to ARS account.
    if (userArsAccount)
      setAccountSelected(userArsAccount)
  }, [userArsAccount]);

  useEffect(() => {
    httpGetOne('balance', userId).then(res => {
      setUserArsBalance(res.data.arsBalance);
      setUserUsdBalance(res.data.usdBalance);
    })
  });

  useEffect(() => { // Sets default account balance selected to ARS balance.
    setBalanceSelected(userArsBalance)
  }, [userArsBalance])

  const validationSchema = yup.object({
    amount: yup
      .number().typeError(MESSAGE_NOT_A_NUMBER)
      .positive(MESSAGE_NEGATIVE_NUMBER)
      .max(balanceSelected, MESSAGE_NOT_ENOUGH_MONEY)
      .required(MESSAGE_REQUIRED_CASHOUT_AMMOUNT),
  });

  const postFixedTermDeposit = (userId, accountId, amount, concept, type) => {
    const data = {
      userId: userId,
      accountId: accountId,
      amount: amount,
      concept: concept,
      type: type,
      closingDate: null
    }
    httpPost("fixedTermDeposits", data)
  }

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.concept = "plazo fijo"
      values.type = 'payment';
      postFixedTermDeposit(userId, accountSelected, values.amount, values.concept, values.type)
      resetForm({ values: '' })
      SuccessAlertComponent(MESSAGE_LOGIN_SUCCESS).then(() =>
        history.push("/ftd")
      );
    },
  });

  return (
    <>
      <CreateFixedTermDepositForm
        formik={formik}
        userArsAccount={userArsAccount}
        userUsdAccount={userUsdAccount}
        accountSelected={accountSelected}
        userArsBalance={userArsBalance}
        userUsdBalance={userUsdBalance}
        setAccountSelected={setAccountSelected}
        setBalanceSelected={setBalanceSelected} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(CreateFixedTermDepositComponent);