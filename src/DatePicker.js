import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
const DatePickerComponent = ({ selected, onChange }) => {
  return (
    <div className="">
      <DatePicker selected={selected} onChange={onChange} />
    </div>
  );
};

DatePicker.propTypes = {
  selected: PropTypes.date,
  onChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
