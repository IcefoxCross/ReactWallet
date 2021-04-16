import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
