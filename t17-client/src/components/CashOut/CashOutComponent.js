import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  MESSAGE_REQUIRED_CASHOUT_AMMOUNT,
  MESSAGE_NOT_A_NUMBER,
  MESSAGE_NEGATIVE_NUMBER,
  MESSAGE_STRING_CONCEPT,
  MESSAGE_REQUIRED_CONCEPT,
} from "../../constants/constants";
import { createTransaction } from "./services/CashOutServices";
import Swal from 'sweetalert2'
import CashOutForm from "./CashOutForm";

function CashOutComponent({ user }) {
  const [userId, setUserId] = useState(0);
  const [userArsAccount, setUserArsAccount] = useState(0);
  const [userUsdAccount, setUserUsdAccount] = useState(0);
  const [accountSelected, setAccountSelected] = useState(userArsAccount);

  useEffect(() => {
    setUserId(user.user.id);
  }, []);

  useEffect(() => {
    setUserArsAccount((userId * 2) - 1);
    setUserUsdAccount((userId * 2));
  }, [userId])

  useEffect(() => {
    setAccountSelected(userArsAccount)
  }, [userArsAccount])

  const validationSchema = yup.object({
    amount: yup
      .number().typeError(MESSAGE_NOT_A_NUMBER)
      .positive(MESSAGE_NEGATIVE_NUMBER)
      .required(MESSAGE_REQUIRED_CASHOUT_AMMOUNT),
    concept: yup
      .string(MESSAGE_STRING_CONCEPT)
      .required(MESSAGE_REQUIRED_CONCEPT),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      concept: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      values.type = 'payment';
      values.accountId = accountSelected;
      values.createdAt = new Date();
      values.updatedAt = new Date();
      createTransaction(values) // To do: Disminuir la cuenta bancaria del user segun lo retirado.
      resetForm({ values: '' })
      Swal.fire(
        '¡Exito!',
        'Transacción realizada.',
        'success'
      )
    },
  });

  return (
    <CashOutForm
      formik={formik}
      userArsAccount={userArsAccount}
      userUsdAccount={userUsdAccount}
      accountSelected={accountSelected}
      setAccountSelected={setAccountSelected} />
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(CashOutComponent);