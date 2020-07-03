import React, { Fragment, useState } from "react";
import isEmptyObject from "./utils/is-empty-object";

import Accordion from "./components/accordion";
import Search from "./components/search";

import Dropdown from "./components/dropdown";

import items from "./fixtures/items";
import options from "./fixtures/options";

const App = () => {
  const [selectedOption, setSelectedOption] = useState({});
  const handleSelectedChange = (option) => setSelectedOption(option);
  return (
    <Fragment>
      <h1>Accordion</h1>
      <Accordion items={items} />
      <h1>Search List</h1>
      <Search initialSearchTerm="" />
      <h1>Dropdown</h1>
      <Dropdown
        label="Select Color"
        placeholder="Please select a Color"
        options={options}
        selected={selectedOption}
        onSelectedChange={handleSelectedChange}
      />
      {!isEmptyObject(selectedOption) && (
        <div className="ui segment" style={{ width: "600px" }}>
          <p>{selectedOption.content}</p>
        </div>
      )}
    </Fragment>
  );
};

export default App;
