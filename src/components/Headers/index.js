import React from "react";
// import NewsletterModal from "../NewsletterModal";
import NotificationToast from "../NotificationToast";
import HeaderTopSection from "../HeaderTopSection";
import HeaderMainNav from "../HeaderMainNav";
import HeaderSections from "../HeaderSections";
import HeaderMobile from "../HeaderMobile";

const Homepage = () => {
    return (
        <>
            <div className="overlay" data-overlay></div>

            {/* <NewsletterModal /> */}

            <NotificationToast />

            <HeaderTopSection />
            <HeaderMainNav />
            <HeaderSections />
            <HeaderMobile />
            {/* Add other sections/components here */}
        </>
    );
};

export default Homepage;
