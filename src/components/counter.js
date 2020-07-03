import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => setCount(count + 1);
  return (
    <Fragment>
      <button onClick={handleButtonClick}>Click Me!</button>
      <h3>Current Count: {count}</h3>
    </Fragment>
  );
};

export default Counter;
