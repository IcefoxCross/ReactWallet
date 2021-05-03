import React from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import {
  Card, CardActionArea, CardContent, Typography
} from '@material-ui/core';
import GraphComponent from '../Graph/GraphComponent';

const HomeComponent = ({user}) => {
  const history = useHistory();

  if (user.user.id) {
    return (
      <div>
        <GraphComponent />
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
