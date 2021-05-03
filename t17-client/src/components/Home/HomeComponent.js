import React from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import {
  Card, CardActionArea, CardContent, Typography, Grid
} from '@material-ui/core';
import GraphComponent from '../Graph/GraphComponent';
import LastTransactionsComponent from '../ListLastTransactions/LastTransactionsComponent';
import BalanceComponent from '../../components/Balance/BalanceComponent';

const HomeComponent = ({user}) => {
  const history = useHistory();

  if (user.user.id) {
    return (
      <div>
        <Grid container spacing={2} direction="column" justify="center"
          alignItems="center" alignContent="stretch" wrap="nowrap">
            <Grid item container>
              <GraphComponent />
            </Grid>
            <Grid item container>
              <LastTransactionsComponent />
            </Grid>
            <Grid item container>
              <BalanceComponent />
            </Grid>
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <Card style={{display: 'inline-block', padding: 3}}>
          <CardActionArea onClick={() => history.push("/login")}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Bienvenido!
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" component="p">
                Para empezar a utilizar la billetera, haz click para iniciar sesión o registrarte.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      user: state.user,
  };
}

export default connect(mapStateToProps)(HomeComponent);
