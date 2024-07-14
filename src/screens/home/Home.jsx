import React, { Component } from "react";
import BasicCard from "../../components/cards/BasicCard";
import HomeContainer from "../../components/containers/HomeContainer";
import HomeIcons from "../../components/icon/home/HomeIcons";
import Heading3 from "../../components/typography/Heading3";

import TopnavFlex from "../../layout/topnav/TopnavFlex";
import theme from "../../theme/theme";
import FooterFlex from "../../layout/footer/FooterFlex";
import { Link } from "react-router-dom";
import { FlexedRow, FlexedCol } from "./FlexedRow";

export default class Home extends Component {
  src = [
    {
      id: "https://img.icons8.com/color/150/000000/student-male--v2.png",
      name: "student",
      link: "/student",
    },
    {
      id: "https://img.icons8.com/color/150/000000/conference-background-selected.png",
      name: "Staff",
      link: "",
    },
    {
      id: "https://img.icons8.com/fluency/48/000000/checked-user-male.png",
      name: "Attendance",
      link: "/attendance",
    },
    {
      id: "https://img.icons8.com/color/150/000000/book-shelf.png",
      name: "Library",
      link: "",
    },
    {
      id: "https://img.icons8.com/cute-clipart/150/000000/calendar.png",
      name: "Academic Calendar",
      link: "",
    },
  ];

  render() {
    return (
      <div style={{ background: theme.colors.base, marginBottom: "0.8em" }}>
        <TopnavFlex home />
        <HomeContainer>
          <FlexedRow>
            {this.src.map(({ id, name, link }, idx) => (
              <FlexedCol>
                <Link to={link} style={{ textDecoration: "none" }}>
                  <BasicCard>
                    <HomeIcons src={id} />
                    <Heading3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {name}
                    </Heading3>
                  </BasicCard>
                </Link>
              </FlexedCol>
            ))}
          </FlexedRow>
          <FlexedRow>
            {/* Sports */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/sports-mode.png" />
                <Heading3 style={{ textAlign: "center" }}>Sports</Heading3>
              </BasicCard>
            </FlexedCol>

            {/* Time Table */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/timetable.png" />
                <Heading3 style={{ textAlign: "center" }}>Time Table</Heading3>
              </BasicCard>
            </FlexedCol>

            {/* Inventory */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/open-box.png" />
                <Heading3 style={{ textAlign: "center" }}>Inventory</Heading3>
              </BasicCard>
            </FlexedCol>

            {/* Clubs & Organizations */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/sales-channels.png" />
                <Heading3 style={{ textAlign: "center" }}>
                  Clubs&nbsp;&&nbsp;Organizations
                </Heading3>
              </BasicCard>
            </FlexedCol>

            {/* Reports */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/flat_round/150/000000/statistic-file.png" />
                <Heading3 style={{ textAlign: "center" }}>Reports</Heading3>
              </BasicCard>
            </FlexedCol>

            {/* Alumni */}
            <FlexedCol>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/police-badge.png" />
                <Heading3 style={{ textAlign: "center" }}>Alumni</Heading3>
              </BasicCard>
            </FlexedCol>
          </FlexedRow>
        </HomeContainer>
        <FooterFlex />
      </div>
    );
  }
}
