import React, { Fragment } from "react";

const Accordion = ({ items }) => (
  <div className="ui styled accordion">
    {items.map(({ id, title, content }) => (
      <Fragment key={id}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className="content active">{content}</div>
      </Fragment>
    ))}
  </div>
);

export default Accordion;
