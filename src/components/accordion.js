import React, { Fragment, useState } from "react";

const Accordion = ({ items = [] }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const handleAccordionTitleClick = (idx) =>
    setActiveIdx(idx === activeIdx ? null : idx);
  return (
    <div className="ui styled accordion">
      {items.map(({ id, title, content }, idx) => (
        <Fragment key={id}>
          <div
            className={`title${idx === activeIdx ? " active" : ""}`}
            onClick={() => handleAccordionTitleClick(idx)}
          >
            <i className="dropdown icon"></i>
            {title}
          </div>
          <div className={`content${idx === activeIdx ? " active" : ""}`}>
            {content}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Accordion;
