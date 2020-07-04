import React from "react";
import Link from "./link";

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link href="/" className="item">
      Accordion
    </Link>
    <Link href="/dropdown" className="item">
      Dropdown
    </Link>
    <Link href="/search" className="item">
      Wiki
    </Link>
    <Link href="/translate" className="item">
      Translate
    </Link>
  </div>
);

export default Header;
