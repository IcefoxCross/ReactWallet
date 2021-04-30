import React, { useEffect, useState } from 'react';
import ProfileContent from './ProfileContent';
import { connect } from 'react-redux';

const ProfileComponent = ({ user }) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setUserInfo(user.user)
  }, [])

  return (
    <ProfileContent userInfo={userInfo} />
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ProfileComponent);