import React, { useState, Fragment } from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";

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
          <label>Enter text to translate</label>
          <input
            type="text"
            className="input"
            value={text}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <Dropdown
        label="Select language to translate"
        placeholder="Please select a language"
        options={languageOptions}
        selected={selectedLanguageOption}
        onSelectedChange={setSelectedLanguageOption}
        disabled={!text}
      />
      {!isEmptyObject(selectedLanguageOption) && (
        <Convert language={selectedLanguageOption.value} text={text} />
      )}
    </Fragment>
  );
};

export default Translate;
