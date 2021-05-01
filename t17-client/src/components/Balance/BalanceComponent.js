import React, { useEffect, useState } from 'react';
import { httpGetOne } from '../../services/httpServices';
import BalanceContent from './BalanceContent';
import { connect } from 'react-redux';

const BalanceComponent = ({ user }) => {
  const [userId, setUserId] = useState();
  const [arsBalance, setArsBalance] = useState();
  const [usdBalance, setUsdBalance] = useState();

  useEffect(() => {
    if (!userId) setUserId(user.user.id);
  }, [userId]);

  useEffect(() => {
    httpGetOne('balance', userId).then(async (res) => {
      const fetchArsBalance = await res.data.arsBalance;
      const fetchUsdBalance = await res.data.usdBalance;
      setArsBalance(fetchArsBalance);
      setUsdBalance(fetchUsdBalance);
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
