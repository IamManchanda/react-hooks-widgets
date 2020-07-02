import React, { Fragment } from "react";

const Accordion = ({ items }) => {
  const handleTitleClick = (idx) => {
    console.log("Title clicked", idx);
  };

  return (
    <div className="ui styled accordion">
      {items.map(({ id, title, content }, idx) => (
        <Fragment key={id}>
          <div className="title active" onClick={() => handleTitleClick(idx)}>
            <i className="dropdown icon"></i>
            {title}
          </div>
          <div className="content active">{content}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default Accordion;
