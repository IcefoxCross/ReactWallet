import React, { useEffect, useState } from 'react';
import { httpGetOne } from '../../services/httpServices';
import ProfileContent from './ProfileContent';
import { connect } from 'react-redux';

const ProfileComponent = ({ user }) => {
  const [userId, setUserId] = useState();
  const [arsBalance, setArsBalance] = useState();
  const [usdBalance, setUsdBalance] = useState();

  useEffect(() => {
    setUserId(user.user.id);
  }, []);

  useEffect(() => {
    httpGetOne('balance', userId).then(async (res) => {
      const fetchArsBalance = await res.data.arsBalance;
      const fetchUsdBalance = await res.data.usdBalance;
      setArsBalance(fetchArsBalance);
      setUsdBalance(fetchUsdBalance);
    })
  }, [userId])

  return (
    <ProfileContent arsBalance={arsBalance} usdBalance={usdBalance} />
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ProfileComponent);