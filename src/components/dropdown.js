import React, { useState, useEffect, useRef } from "react";
import isEmptyObject from "../utils/is-empty-object";

const Dropdown = ({
  label = "",
  placeholder = "",
  options = [],
  selected = {},
  onSelectedChange = () => {},
  disabled = false,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef();
  const handleDropdownClick = () => setOpenDropdown(!openDropdown);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpenDropdown(false);
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => document.body.removeEventListener("click", handleBodyClick);
  }, []);

  return (
    <div ref={ref} className="ui form" style={{ width: "600px" }}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown${
            openDropdown ? " visible active" : ""
          }${disabled ? " disabled" : ""}`}
          onClick={handleDropdownClick}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            {isEmptyObject(selected) ? placeholder : selected.label}
          </div>
          <div className={`menu${openDropdown ? " visible transition" : ""}`}>
            {options.map((option) => (
              <div
                key={option.id}
                className={`item${
                  option.value === selected.value
                    ? " active selected disabled"
                    : ""
                }`}
                onClick={() => onSelectedChange(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
