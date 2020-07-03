import React, { Fragment } from "react";

import Accordion from "./components/accordion";
import Counter from "./components/counter";
import Search from "./components/search";

import Dropdown from "./components/dropdown";

import items from "./fixtures/items";
import options from "./fixtures/options";

const App = () => (
  <Fragment>
    <h1>Widgets App</h1>
    <h2>Accordion</h2>
    <Accordion items={items} />
    <h2>Counter</h2>
    <Counter />
    <h2>Search List</h2>
    <Search initialSearchTerm="" />
    <h2>Dropdown</h2>
    <Dropdown
      label="Select Color"
      placeholder="Please select a Color"
      options={options}
    />
  </Fragment>
);

export default App;
