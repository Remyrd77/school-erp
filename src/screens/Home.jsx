import React, { Component } from "react";
import BasicCard from "../components/cards/BasicCard";
import { Row, Col } from "react-grid-system";
import HomeContainer from "../components/containers/HomeContainer";
//images or icons

import HomeIcons from "../components/icon/home/HomeIcons";
import Heading3 from "../components/typography/Heading3";
import TopnavFlex from "../layout/topnav/TopnavFlex";
import theme from "../theme/theme";
import FooterFlex from "../layout/footer/FooterFlex";

import { Link } from "react-router-dom";

export default class Home extends Component {
  src = [
    {
      id: "https://img.icons8.com/color/150/000000/student-male--v2.png",
      name: "student",
    },
    {
      id: "https://img.icons8.com/color/150/000000/conference-background-selected.png",
      name: "Staff",
    },
    {
      id: "https://img.icons8.com/color/150/000000/exam.png",
      name: "Attendance",
    },
    {
      id: "https://img.icons8.com/color/150/000000/exam.png",
      name: "Attendance",
    },
    {
      id: "https://img.icons8.com/color/150/000000/book-shelf.png",
      name: "Library",
    },
    {
      id: "https://img.icons8.com/cute-clipart/150/000000/calendar.png",
      name: "Academic Calendar",
    },
  ];
  render() {
    return (
      <div style={{ background: theme.colors.base, marginBottom: "0.8em" }}>
        <TopnavFlex home />
        <HomeContainer>
          <Row>
            <Col md={2}>
              {this.src.map(({ id, name }) => (
                <>
                  <Link to="/student" style={{ textDecoration: "none" }}>
                    <BasicCard>
                      <HomeIcons src={id} />
                      <Heading3
                        style={{ textAlign: "center", textDecoration: "none" }}
                      >
                        asdasda
                      </Heading3>
                      a
                    </BasicCard>
                  </Link>
                </>
              ))}
            </Col>
          </Row>

          <br />
          <br />
          <Row>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/sports-mode.png" />
                <Heading3 style={{ textAlign: "center" }}>Sports</Heading3>
              </BasicCard>
            </Col>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/timetable.png" />
                <Heading3 style={{ textAlign: "center" }}>Time Table</Heading3>
              </BasicCard>
            </Col>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/open-box.png" />
                <Heading3 style={{ textAlign: "center" }}>Inventory</Heading3>
              </BasicCard>
            </Col>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/sales-channels.png" />
                <Heading3 style={{ textAlign: "center" }}>
                  Clubs&nbsp;&&nbsp;Organizations
                </Heading3>
              </BasicCard>
            </Col>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/flat_round/150/000000/statistic-file.png" />
                <Heading3 style={{ textAlign: "center" }}>Reports</Heading3>
              </BasicCard>
            </Col>
            <Col md={2}>
              <BasicCard>
                <HomeIcons src="https://img.icons8.com/color/150/000000/police-badge.png" />
                <Heading3 style={{ textAlign: "center" }}>Alumni</Heading3>
              </BasicCard>
            </Col>
          </Row>
        </HomeContainer>
        <FooterFlex />
      </div>
    );
  }
}
