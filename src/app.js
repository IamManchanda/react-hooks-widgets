import React, { Fragment } from "react";

import Accordion from "./components/accordion";
import Counter from "./components/counter";
import Search from "./components/search";
import items from "./fixtures/items";

const App = () => (
  <Fragment>
    <h1>Widgets App</h1>
    <h2>Accordion</h2>
    <Accordion items={items} />
    <h2>Counter</h2>
    <Counter />
    <h2>Search List</h2>
    <Search />
  </Fragment>
);

export default App;
