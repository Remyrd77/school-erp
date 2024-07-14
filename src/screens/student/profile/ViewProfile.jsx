import React, { Component } from "react";
import Paragraph from "../../../components/typography/Paragraph";
import { connect } from "react-redux";
import { getParents } from "../../../redux/actions/student/parentAction";
import Card from "../../../components/cards/Card";
import { FormRow, FormColumn } from "../../../components/containers/FormColumn";

import theme from "../../../theme/theme";
import Heading2 from "../../../components/typography/Heading2";
import Heading4 from "../../../components/typography/Heading4";
import Avatar from "../../../assets/img/avatar.jpg";

class ViewProfile extends Component {
  componentDidMount() {
    this.props.fetchParents();
  }
  render() {
    console.log(this.props.parentList);
    return (
      <FormColumn>
        <FormRow
          style={{
            padding: "0",
            paddingRight: "3em",
            paddingLeft: "3em",
            margin: "0",
          }}
        >
          <FormColumn
            style={{
              padding: "0.4em",
              margin: "0",
              color: theme.colors.viewText,
            }}
          >
            <Heading2>Robin Das</Heading2>

            <FormRow style={{ padding: "0" }}>
              <Paragraph>Admission No:</Paragraph>
              <Paragraph
                style={{ color: theme.colors.viewText, paddingLeft: "0.6em" }}
              >
                2024 TRY Me
              </Paragraph>
              <Paragraph style={{ paddingLeft: "2em" }}>Grade:</Paragraph>
              <Paragraph
                style={{ paddingLeft: "0.6em", color: theme.colors.viewText }}
              >
                11
              </Paragraph>
              <Paragraph
                style={{ color: theme.colors.viewText, paddingLeft: "0.1em" }}
              >
                A
              </Paragraph>
            </FormRow>
          </FormColumn>
          <Card
            style={{
              height: "80px",
              width: "80px",
              backgroundImage: `url(${Avatar})`,
            }}
          ></Card>
        </FormRow>
        <FormRow>
          <Card
            style={{
              padding: "0.9em",
              width: "65em",
              color: theme.colors.viewText,
            }}
          >
            <Heading4
              style={{
                padding: "0",
                textAlign: "center",
                margin: "0",
                color: theme.colors.viewhed,
                borderBottom: "2px solid #979797",
                background: theme.colors.viewText,
                borderRadius: theme.size.btnRadiusWhenHover,
              }}
            >
              Personal Informations
            </Heading4>

            <FormRow style={{ padding: "0" }}>
              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  Address:
                </Paragraph>{" "}
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>1301 C Wing, India</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  StudyStart:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>2021.09.09</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  distance:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>5km</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  DoB:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>1997:01:06</Paragraph>
              </FormColumn>
            </FormRow>

            <FormRow style={{ padding: "0" }}>
              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  Gender:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>Male</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  Height:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>5.11ft</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  Religion:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>Christian</Paragraph>
              </FormColumn>

              <FormColumn viewprofile>
                <Paragraph style={{ color: theme.colors.viewhed }}>
                  Gradtuation Marks:
                </Paragraph>
              </FormColumn>
              <FormColumn viewprofile>
                <Paragraph>78%</Paragraph>
              </FormColumn>
            </FormRow>
          </Card>
        </FormRow>

        <FormRow>
          <FormRow>
            <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
              <Heading4
                style={{
                  padding: "0",
                  textAlign: "center",
                  margin: "0",
                  color: theme.colors.viewhed,
                  borderBottom: "2px solid #979797",
                  background: theme.colors.viewText,
                  borderRadius: theme.size.btnRadiusWhenHover,
                }}
              >
                Father's Details
              </Heading4>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Name:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Mr. C Das</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Occupation:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Business Man</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Father Email:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>father@gmail.com</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Mobile:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>98967XXXX</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    {" "}
                    Father Official Address:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Somewhere in India</Paragraph>
                </FormColumn>
              </FormRow>
            </Card>

            <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
              <Heading4
                style={{
                  padding: "0",
                  textAlign: "center",
                  margin: "0",
                  color: theme.colors.viewhed,
                  borderBottom: "2px solid #979797",
                  background: theme.colors.viewText,
                  borderRadius: theme.size.btnRadiusWhenHover,
                }}
              >
                Mother's Details{" "}
              </Heading4>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Name:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Mrs. N Das</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Occupation:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Homemaker</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Mother Email:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>mother@gmail.com</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  {" "}
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    mothermobile:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>7015243XXX</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Mother Official Address:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Somewhere in India</Paragraph>
                </FormColumn>
              </FormRow>
            </Card>
            <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
              <Heading4
                style={{
                  padding: "0",
                  textAlign: "center",
                  margin: "0",
                  color: theme.colors.viewhed,
                  borderBottom: "2px solid #979797",
                  background: theme.colors.viewText,
                  borderRadius: theme.size.btnRadiusWhenHover,
                }}
              >
                Siblings{" "}
              </Heading4>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Name:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Ashish</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Occupation:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Student</Paragraph>
                </FormColumn>
              </FormRow>

              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Contact Number:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>XXXX7021XXX</Paragraph>
                </FormColumn>
              </FormRow>
            </Card>
            <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
              <Heading4
                style={{
                  padding: "0",
                  textAlign: "center",
                  margin: "0",
                  color: theme.colors.viewhed,
                  borderBottom: "2px solid #979797",
                  background: theme.colors.viewText,
                  borderRadius: theme.size.btnRadiusWhenHover,
                }}
              >
                Guardian Details
              </Heading4>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Guardian:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>father</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Name:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Mr. C Das</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Mobile No:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>XX789XX</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Email:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>guardian@gmail</Paragraph>
                </FormColumn>
              </FormRow>
              <FormRow style={{ padding: "0" }}>
                <FormColumn viewprofile>
                  <Paragraph style={{ color: theme.colors.viewhed }}>
                    Occupation:
                  </Paragraph>
                </FormColumn>
                <FormColumn viewprofile>
                  <Paragraph>Business</Paragraph>
                </FormColumn>
              </FormRow>
            </Card>
          </FormRow>
        </FormRow>
        <FormRow></FormRow>
      </FormColumn>
    );
  }
}

const mapStateToProps = (state) => ({
  parentList: state.parentReducer.parents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchParents: () => dispatch(getParents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
