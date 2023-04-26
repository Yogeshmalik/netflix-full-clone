import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import './mediaCSS.css'

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen className="loginScreen__app" />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
