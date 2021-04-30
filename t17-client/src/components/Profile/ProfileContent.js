import React from 'react'
import {
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import UserProfile from './UserProfile';

const ProfileContent = ({ userInfo }) => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} direction="column">
        <Grid item style={{ marginBottom: '20px' }}>
          <Typography variant="h5" color="initial" data-testid="cashout-title">
            Perfil
          </Typography>
        </Grid>
        <Grid
          alignItems="center"
          justify="center">
          <UserProfile userInfo={userInfo} />
        </Grid>
      </Grid>
    </Container >
  )
}

export default ProfileContent