import React, { useState, Fragment } from "react";
import Dropdown from "./dropdown";

import languageOptions from "../fixtures/language-options";
import isEmptyObject from "../utils/is-empty-object";

const Translate = () => {
  const [text, setText] = useState("");
  const [selectedLanguageOption, setSelectedLanguageOption] = useState({});
  const handleTextChange = (event) => setText(event.target.value);
  return (
    <Fragment>
      <div className="ui form" style={{ width: "600px", marginBottom: "1rem" }}>
        <div className="field">
          <label>Enter Text to Translate</label>
          <input
            type="text"
            className="input"
            value={text}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <Dropdown
        label="Select Language to Translate"
        placeholder="Please select a Language"
        options={languageOptions}
        selected={selectedLanguageOption}
        onSelectedChange={setSelectedLanguageOption}
        disabled={!text}
      />
      {!isEmptyObject(selectedLanguageOption) && (
        <div className="ui segment" style={{ width: "600px" }}>
          <p>
            {text} | {selectedLanguageOption.label}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Translate;
