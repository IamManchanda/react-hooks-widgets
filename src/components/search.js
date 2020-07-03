import React, { Fragment, useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (event) => setSearchTerm(event.target.value);
  useEffect(
    function rerenderSearch() {
      console.log(searchTerm);
    },
    [searchTerm],
  );
  return (
    <Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            type="text"
            className="input"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
