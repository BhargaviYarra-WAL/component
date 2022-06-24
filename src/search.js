import React from "react";
import PropTypes from "prop-types";

//import "./search.scss";

//import { useState } from "react";
//const [value, setValue] = useState("tye");

const Search = ({ searchText, placeholder, handleChange, handleTrigger }) => {
  return (
    <div className="local-search ">
      <input placeholder={placeholder} searchText={searchText} type="text" />
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
};

{
  /*
Search.defaultProps = {
  searchText: "react",
  placeholder: "search",
  handleChange: () => {},
  handleTrigger: () => {},
};*/
}

export default Search;
