/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const ButtonComponent = ({ value, kind, size, color, autoFocus, disabled }) => {
  return (
    <Button
      disabled={disabled}
      autoFocus={autoFocus}
      kind={kind}
      size={size}
      color={color}
    >
      {value}
    </Button>
  );
};

ButtonComponent.propTypes = {
  kind: PropTypes.oneOf(["flat", "outline", "round", "toggle"]),
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
  ]),
  value: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ButtonComponent;
