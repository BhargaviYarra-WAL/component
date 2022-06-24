import React from "react";
import Dropdown from "./dropdown";
import { useState } from "react";

const Drop = () => {
  const options = [
    { label: "one", value: "one" },
    { label: "two", value: "two" },
    { label: "three", value: "three" },
    { label: "four", value: "four" },
  ];

  const [value, setValue] = useState("one");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="choose numbers"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Drop;
