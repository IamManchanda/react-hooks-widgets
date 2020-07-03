import React, { useState } from "react";
import isEmptyObject from "../utils/is-empty-object";

const Dropdown = ({
  label = "",
  placeholder = "",
  options = [],
  selected = {},
  onSelectedChange = () => {},
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdownClick = () => setOpenDropdown(!openDropdown);
  return (
    <div className="ui form" style={{ width: "600px" }}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown${
            openDropdown ? " visible active" : ""
          }`}
          onClick={handleDropdownClick}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            {isEmptyObject(selected) ? placeholder : selected.label}
          </div>
          <div className={`menu${openDropdown ? " visible transition" : ""}`}>
            {options.map(({ id, label, value }) => (
              <div
                key={id}
                className={`item${
                  value === selected.value ? " active selected" : ""
                }`}
                onClick={() => onSelectedChange({ id, label, value })}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
