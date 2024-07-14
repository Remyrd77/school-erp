import React, { Component } from "react";
import { HashRouter as RouteIt, Switch, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Layout from "../layout/Layout";
import SignInPage from "../screens/SignIn/SignInPage";
import Attendance from "../screens/attendance/attendance";
import TopnavFlex from "../layout/topnav/TopnavFlex";
import FooterFlex from "../layout/footer/FooterFlex";

class Router extends Component {
  checkisuserlogged() {
    if (localStorage.getItem("userToken")) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <RouteIt>
        <Switch>
          {!this.checkisuserlogged() ? (
            <Route path={["/", "/login"]} component={SignInPage} />
          ) : (
            <>
              <TopnavFlex />
              <Route exact path="/" component={Home} />
              <Route path="/student" component={Layout} />
              <Route path="/login" component={SignInPage} />
              <Route path="/attendance" component={Attendance} />
              <FooterFlex />
            </>
          )}
        </Switch>
      </RouteIt>
    );
  }
}

export default Router;
