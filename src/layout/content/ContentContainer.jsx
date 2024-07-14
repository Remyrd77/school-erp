import React, { Component } from "react";
import Content from "./Content";
import ChildRouter from "../../router/ChildRouter";
import PrincipalDashboard from "../../screens/student/PrincipalDashboard";

export default class ContentContainer extends Component {
  render() {
    return (
      <Content>
        <ChildRouter />
      </Content>
    );
  }
}
