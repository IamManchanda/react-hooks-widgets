import React, { useState } from "react";
import isEmptyObject from "./utils/is-empty-object";

import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

import items from "./fixtures/items";
import options from "./fixtures/options";

const App = () => {
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <div className="app">
      <Header />
      <Route path="/">
        <h1>Accordion</h1>
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <h1>Search List</h1>
        <Search initialSearchTerm="" />
      </Route>
      <Route path="/dropdown">
        <h1>Dropdown</h1>
        <Dropdown
          label="Select color"
          placeholder="Please select a color"
          options={options}
          selected={selectedOption}
          onSelectedChange={setSelectedOption}
        />
        {!isEmptyObject(selectedOption) && (
          <div className="ui segment" style={{ width: "600px" }}>
            <p>{selectedOption.content}</p>
          </div>
        )}
      </Route>
      <Route path="/translate">
        <h1>Translate</h1>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
