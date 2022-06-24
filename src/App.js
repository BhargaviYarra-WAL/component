import "./App.css";
import { useState } from "react";

import DatePickerComponent from "./DatePicker";
//import DatePicker from "./datepicker";
import Drop from "./drop";
import FormComponent from "./form";
import Search from "./search.js";

//import ButtonComponent from "./button";

function App() {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <div className="App">
      <FormComponent />
      <Drop />
      <DatePickerComponent selected={startDate} onChange={onChange} />
      <Search searchText="" placeholder="search" />
    </div>
  );
}

export default App;
