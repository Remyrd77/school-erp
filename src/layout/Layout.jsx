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
import TopnavContent from "./topnav/TopNavContent";

export default class Layout extends Component {
  render() {
    return (
      <LayoutContainer>
        <FlexContainer>
          <FlexContainingRow>
            <Sidenav></Sidenav>
            <FlexContainingColumn container>
              <FlexContainingRow>
                <TopnavContent />
              </FlexContainingRow>
              <FlexContainingRow>
                <ContentContainer />
              </FlexContainingRow>
              <FlexContainingRow>
                <FooterFlexContent />
              </FlexContainingRow>
            </FlexContainingColumn>
          </FlexContainingRow>
        </FlexContainer>
      </LayoutContainer>
    );
  }
}
