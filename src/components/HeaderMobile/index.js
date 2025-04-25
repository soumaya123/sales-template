import React, { useState } from "react";
import { Accordion, SubMenu } from "./Accordion"; // Adjust the import path as necessary
const HeaderMobile = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${menuActive ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Bottom Nav */}
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn" onClick={toggleMenu}>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-navigation-menu has-scrollbar ${
          menuActive ? "active" : ""
        }`}
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={closeMenu}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">Home</a>
          </li>

          {/* Repeat this pattern for other menu categories */}
          {/* Example of Accordion below */}
          <Accordion title="Men's">
            <SubMenu items={["Shirt", "Shorts & Jeans", "Safety Shoes", "Wallet"]} />
          </Accordion>

          <Accordion title="Women's">
            <SubMenu items={["Dress & Frock", "Earrings", "Necklace", "Makeup Kit"]} />
          </Accordion>

          <Accordion title="Jewelry">
            <SubMenu items={["Earrings", "Couple Rings", "Necklace", "Bracelets"]} />
          </Accordion>

          <Accordion title="Perfume">
            <SubMenu items={["Clothes Perfume", "Deodorant", "Flower Fragrance", "Air Freshener"]} />
          </Accordion>

          <li className="menu-category">
            <a href="#" className="menu-title">Blog</a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">Hot Offers</a>
          </li>
        </ul>

        <div className="menu-bottom">
          <Accordion title="Language">
            <SubMenu items={["English", "Español", "Français"]} />
          </Accordion>

          <Accordion title="Currency">
            <SubMenu items={["USD $", "EUR €"]} />
          </Accordion>

          <ul className="menu-social-container">
            <li><a href="#" className="social-link"><ion-icon name="logo-facebook" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-twitter" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-instagram" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-linkedin" /></a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderMobile;
