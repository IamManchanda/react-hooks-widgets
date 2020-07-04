import React, { useState, useEffect } from "react";
import axios from "axios";

const { REACT_APP_GOOGLE_TRANSLATE_API_KEY } = process.env;

const Convert = ({ language = "", text = "" }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 300);
    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    (async function fetchTranslatedText() {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            target: language,
            q: debouncedText,
            key: REACT_APP_GOOGLE_TRANSLATE_API_KEY,
          },
        },
      );
      setTranslatedText(data.data.translations[0].translatedText);
    })();
  }, [language, debouncedText]);

  return (
    <div className="ui segment" style={{ width: "600px", maxWidth: "100%" }}>
      <p>{translatedText}</p>
    </div>
  );
};

export default Convert;
