import React, { Component } from "react";

import Heading1 from "../components/typography/Heading1";

import FloatingLabel from "../components/inputs/PlaceholderLabel";

export default class Inputs extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Heading1>Inputs</Heading1>
        <br />
        <br />

        <br />
        <br />
        <br />
        <FloatingLabel text="Username" for="username">
          <input name="username" />
        </FloatingLabel>
        <br />
        {/* <Input placeholder="Username"></Input>
                <FlatInput placeholder="Username"></FlatInput>
                <br />
                <PasswordInput placeholder="Password"></PasswordInput>
                <FlatPasswordInput placeholder="Password"></FlatPasswordInput>
                <br /> */}
        {/* <Select>
                    <Option value="">Select a Value</Option>
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                </Select> */}
        {/* <InputIcon></InputIcon> */}

        {/* <InputWithIcon
                    name="field1"
                    type="text"
                    value=""
                    placeholder="Sample input"
                    onChange={this.onChange}
                ></InputWithIcon> */}
      </div>
    );
  }
}
