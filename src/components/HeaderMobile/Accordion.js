import React, { useState } from "react";

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="menu-category">
      <button className="accordion-menu" onClick={() => setIsOpen(!isOpen)}>
        <p className="menu-title">{title}</p>
        <div>
          <ion-icon name="add-outline" className="add-icon" />
          <ion-icon name="remove-outline" className="remove-icon" />
        </div>
      </button>
      {isOpen && <ul className="submenu-category-list">{children}</ul>}
    </li>
  );
};

export const SubMenu = ({ items }) => (
  <>
    {items.map((item, index) => (
      <li key={index} className="submenu-category">
        <a  className="submenu-title">
          {item}
        </a>
      </li>
    ))}
  </>
);
