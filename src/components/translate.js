import React, { useState } from "react";
import Dropdown from "./dropdown";

import languageOptions from "../fixtures/language-options";

const Translate = () => {
  const [selectedLanguageOption, setSelectedLanguageOption] = useState({});
  return (
    <Dropdown
      label="Select Language"
      placeholder="Please select a Language"
      options={languageOptions}
      selected={selectedLanguageOption}
      onSelectedChange={setSelectedLanguageOption}
    />
  );
};

export default Translate;
