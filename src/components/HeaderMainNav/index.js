import React from "react";

const HeaderMainNav = () => {
  return (
    <div className="header-main">
          <div className="container">
            <a  className="header-logo">
              <img
                src="./assets/images/logo/logo.svg"
                alt="Anon's logo"
                width="120"
                height="36"
              />
            </a>

            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
              />

              <button className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>

            <div className="header-user-actions">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>

              <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

  );
};

export default HeaderMainNav;
