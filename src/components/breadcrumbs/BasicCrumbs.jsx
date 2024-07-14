import React, { Component } from "react";
import HomeIconPrimary from "../icon/HomeIconPrimary";
import Paragraph from "../typography/Paragraph";

export default class BasicCrumbs extends Component {
  render() {
    return (
      <Paragraph>
        <HomeIconPrimary /> /
      </Paragraph>
    );
  }
}
