import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ initialSearchTerm = "" }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchTermChange = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    (async function fetchWikipedia() {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedSearchTerm,
        },
      });
      setSearchResults(data.query ? data.query.search : []);
    })();
  }, [debouncedSearchTerm]);

  return (
    <div className="ui card" style={{ width: "600px", padding: "1rem" }}>
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
        {searchResults.map(({ title, snippet, pageid }) => (
          <div
            className="item"
            key={pageid}
            style={{ padding: "1rem 0.0625rem" }}
          >
            <div className="right floated content">
              <a
                href={`https://en.wikipedia.org?curid=${pageid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ui button"
              >
                Go
              </a>
            </div>
            <div className="content">
              <div className="header" style={{ marginBottom: "0.5rem" }}>
                {title}
              </div>
              <span dangerouslySetInnerHTML={{ __html: snippet }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
