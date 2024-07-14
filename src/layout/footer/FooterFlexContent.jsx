import React, { Component } from "react";
import Paragraph from "../../components/typography/Paragraph";
import {
  FooterContent,
  FooterFlexContentDiv,
} from "../../components/footer/footerContent";

export default class FooterFlexContent extends Component {
  render() {
    return (
      <FooterContent>
        <Paragraph footer> &copy;Copyrights 2024 Robin Das</Paragraph>
        <FooterFlexContentDiv></FooterFlexContentDiv>
        <Paragraph footer>Terms</Paragraph>
        <div style={{ flexBasis: "1em" }}></div>
        <Paragraph footer>Privacy Policy</Paragraph>
      </FooterContent>
    );
  }
}
