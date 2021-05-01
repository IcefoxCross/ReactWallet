import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import { default_routes, protected_routes, auth_routes } from "./routes/routes";
import Box from '@material-ui/core/Box';
import SidebarComponent from './components/Sidebar/SidebarComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.action.hover,
    minHeight: "92vh"
  },
}));

function App({ isAuth }) {
  const classes = useStyles();
  return (
    <Router>
      <div className={"App " + classes.root}>
        <SidebarComponent />
        <Box className={classes.content}>
          <Switch>
            {default_routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
            { isAuth.isAuth ? (
              protected_routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component />
                </Route>
              ))
            ) : (
              auth_routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component />
                </Route>
              ))
            )}
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
      isAuth: state.isAuth,
  }
}

export default connect(mapStateToProps)(App);
