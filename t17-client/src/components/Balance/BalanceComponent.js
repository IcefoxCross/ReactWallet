import React, { useEffect, useState } from 'react';
import { httpGetOne } from '../../services/httpServices';
import BalanceContent from './BalanceContent';
import { connect } from 'react-redux';

const BalanceComponent = ({ user }) => {
  const [userId, setUserId] = useState(0);
  const [arsBalance, setArsBalance] = useState(0);
  const [usdBalance, setUsdBalance] = useState(0);

  useEffect(() => {
    setUserId(user.user.id);
  }, []);

  useEffect(() => {
    httpGetOne('balance', userId).then(res => {
      setArsBalance(res.data.arsBalance);
      setUsdBalance(res.data.usdBalance);
    })
  }, [userId])

  return (
    <BalanceContent arsBalance={arsBalance} usdBalance={usdBalance} />
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(BalanceComponent);
