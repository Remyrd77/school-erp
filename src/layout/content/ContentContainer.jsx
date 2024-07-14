import React, { Component } from "react";
import Content from "./Content";
import ChildRouter from "../../router/ChildRouter";

export default class ContentContainer extends Component {
  render() {
    return (
      <Content>
        {/* <Buttons /> */}
        {/* <Inputs /> */}
        <ChildRouter />
        {/* <Inputs /> */}
      </Content>
    );
  }
}
