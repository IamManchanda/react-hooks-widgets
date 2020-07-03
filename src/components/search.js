import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchTermChange = (event) => setSearchTerm(event.target.value);
  useEffect(
    function rerenderSearch() {
      async function fetchWikipedia() {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: searchTerm,
          },
        });
        setSearchResults(data.query.search);
      }
      if (searchTerm) {
        fetchWikipedia();
      }
    },
    [searchTerm],
  );
  return (
    <div className="search-list">
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
      <div className="ui celled list">
        {searchResults.map(({ title, snippet, pageId }) => (
          <div className="item" key={pageId}>
            <div className="content">
              <div className="header">{title}</div>
              <span dangerouslySetInnerHTML={{ __html: snippet }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
