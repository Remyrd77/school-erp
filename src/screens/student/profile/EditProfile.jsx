import React, { Component } from "react";
import TableCom from "../../Table";
import {
  FlexBoxContainer,
  FlexBoxRow,
  FlexBoxColumn,
} from "../admission/admissionFlexBox";

export default class EditProfile extends Component {
  render() {
    return (
      <FlexBoxContainer>
        <FlexBoxRow>
          <FlexBoxColumn>
            <TableCom />
          </FlexBoxColumn>
        </FlexBoxRow>
      </FlexBoxContainer>
    );
  }
}
