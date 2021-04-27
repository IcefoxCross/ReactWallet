import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import routes from "./routes/routes";
import Box from '@material-ui/core/Box';
import SidebarComponent from './components/Sidebar/SidebarComponent';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.action.hover,
    minHeight: "92vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <SidebarComponent />
        <Box className={classes.content}>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
