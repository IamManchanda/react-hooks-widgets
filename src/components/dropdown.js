import React from "react";

const Dropdown = ({ label = "", placeholder = "", options = [] }) => {
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{placeholder}</div>
          <div className="menu visible transition">
            {options.map(({ id, label, value }) => (
              <div key={id} className="item">
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
