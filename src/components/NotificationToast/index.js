import React from "react";

const NotificationToast = () => {
  return (
  <>
  {false &&  <div className="notification-toast" data-toast>
      <button className="toast-close-btn" data-toast-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="toast-banner" >
        <img
          src="./assets/images/products/jewellery-1.jpg"
          alt="Rose Gold Earrings"
          width="80"
          height="70"
        />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Somsseone in new just bought</p>

        <p className="toast-title">Rose new app Earrings</p>

        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>}
    {false &&  <div className="notification-toast" data-toast>
      <button className="toast-close-btn" data-toast-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="toast-banner" >
        <img
          src="./assets/images/products/jewellery-1.jpg"
          alt="Rose Gold Earrings"
          width="80"
          height="70"
        />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Somsseone in new just bought</p>

        <p className="toast-title">Rose new app Earrings</p>

        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>}
    
    
    </>
  );
};

export default NotificationToast;
