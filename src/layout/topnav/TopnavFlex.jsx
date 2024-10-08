import React, { Component } from "react";
import Heading4 from "../../components/typography/Heading4";
import Bell from "../../assets/icons/fontawesome/bell-regular.svg";
import BellIcon from "../../components/icon/topbar/BellIcon";
import TinyDivider from "../../components/divider/TinyDivider";
import Envelope from "../../assets/icons/fontawesome/envelope-regular.svg";
import Avatar from "../../assets/img/avatar.jpg";
import {
  TopbarFlex,
  FlexBasedDiv,
  IconLink,
} from "../../components/topbar/TopbarFlex";
import School from "../../assets/img/stjohns.png";

export default class TopnavFlex extends Component {
  render() {
    return (
      <TopbarFlex style={{ flexWrap: "nowrap" }}>
        <IconLink to="/">
          <BellIcon
            src={School}
            style={{
              marginLeft: "2.5em",
              height: "54px",
              marginTop: "0.1em",
              borderRadius: "3em",
              alignItems: "center",
              flexDirection: "column",
            }}
          ></BellIcon>
        </IconLink>
        <div style={{ flexBasis: "0.3em" }}></div>
        <TinyDivider style={{ flexDirection: "column", marginBottom: "1em" }} />
        <Heading4 style={{ marginLeft: "0.5em" }}>
          Mysore University, Karnataka
        </Heading4>
        <FlexBasedDiv></FlexBasedDiv>
        <TinyDivider
          style={{ flexDirection: "column", marginBottom: "0.8em" }}
        />
        <div style={{ flexBasis: "1em" }}></div>
        <BellIcon
          src={Bell}
          style={{
            flexBasis: "2em",
            flexDirection: "column",
            marginBottom: "0.8em",
          }}
        ></BellIcon>
        <div style={{ flexBasis: "1em" }}></div>
        <BellIcon
          src={Envelope}
          style={{
            flexBasis: "2em",
            marginBottom: "0.8em",
          }}
        ></BellIcon>
        <div style={{ flexBasis: "1em" }}></div>
        <TinyDivider
          style={{ flexDirection: "column", marginBottom: "0.8em" }}
        />
        <div style={{ flexBasis: "1em" }}></div>

        {!this.props.isLogin && (
          <BellIcon
            src={Avatar}
            style={{
              height: "45px",
              marginTop: "0.3em",
              borderRadius: "3em",
              alignItems: "center",
              flexDirection: "column",
            }}
          ></BellIcon>
        )}
        <div style={{ flexBasis: "1em" }}></div>
      </TopbarFlex>
    );
  }
}
