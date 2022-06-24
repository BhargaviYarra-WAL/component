import React from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";
import ButtonComponent from "./button";

function FormComponent() {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <h5>ReactJS Reactstrap Form Component</h5>
      <Form>
        <FormGroup>
          <Label for="emailField">EMAIL:</Label>
          <Input
            type="email"
            name="email"
            id="emailField"
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordField">PASSWORD:</Label>
          <Input
            type="password"
            name="password"
            id="passwordField"
            placeholder="Enter your password"
          />
        </FormGroup>
        <ButtonComponent
          kind="flat"
          size="sm"
          color="primary"
          value="submit"
          autoFocus={false}
          disabled={false}
        />
      </Form>
    </div>
  );
}

export default FormComponent;
