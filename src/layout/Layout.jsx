import React, { Component } from "react";
import Sidenav from "./sidenav/Sidenav";
import {
  FlexContainer,
  FlexContainingColumn,
  FlexContainingRow,
} from "../components/layout/FlexContainer";
import LayoutContainer from "../components/containers/LayoutContainer";
import ContentContainer from "./content/ContentContainer";
import FooterFlexContent from "./footer/FooterFlexContent";

export default class Layout extends Component {
  render() {
    return (
      <LayoutContainer>
        <FlexContainer>
          <FlexContainingRow>
            <Sidenav></Sidenav>
            <FlexContainingColumn container>
              <FlexContainingRow>
                <ContentContainer />
              </FlexContainingRow>
            </FlexContainingColumn>
          </FlexContainingRow>
        </FlexContainer>
      </LayoutContainer>
    );
  }
}
