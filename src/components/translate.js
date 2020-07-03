import React, { useState, Fragment } from "react";
import Dropdown from "./dropdown";

import languageOptions from "../fixtures/language-options";
import isEmptyObject from "../utils/is-empty-object";

const Translate = () => {
  const [selectedLanguageOption, setSelectedLanguageOption] = useState({});
  return (
    <Fragment>
      <Dropdown
        label="Select Language"
        placeholder="Please select a Language"
        options={languageOptions}
        selected={selectedLanguageOption}
        onSelectedChange={setSelectedLanguageOption}
      />
      {!isEmptyObject(selectedLanguageOption) && (
        <div className="ui segment" style={{ width: "600px" }}>
          <p>{selectedLanguageOption.label}</p>
        </div>
      )}
    </Fragment>
  );
};

export default Translate;
