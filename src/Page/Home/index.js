import React from "react";
//import SpecialProduts from "../../components/Products/ProductSpecial/product-special";
//import { GetProducts } from "../../services";
import Headers from "../../components/Headers";
import Banners from "../../components/Banners";
import Categories from "../../components/Categoires";
import CategorieLeft from "../../components/Categorie.Left";
import ProductsView from "../../components/ProductsView";
import Advertisement from "../../components/Advertisement";
import NewProducts from "../../components/NewProducts";

const Homepage = () => {
  return (
    <>
      <Headers />

      <div className="overlay" data-overlay></div>
      <main>
        <Banners />
        < Categories />


        <div className="product-container">
          <div className="container">

            <CategorieLeft />
            <div className="product-box">
              <ProductsView />
             <Advertisement />
              <NewProducts />
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="testimonials-box">
              <div className="testimonial">
                <h2 className="title">testimonial</h2>

                <div className="testimonial-card">
                  <img
                    src="./assets/images/testimonial-1.jpg"
                    alt="alan doe"
                    className="testimonial-banner"
                    width="80"
                    height="80"
                  />

                  <p className="testimonial-name">Alan Doe</p>

                  <p className="testimonial-title">CEO & Founder Invision</p>

                  <img
                    src="./assets/images/icons/quotes.svg"
                    alt="quotation"
                    className="quotation-img"
                    width="26"
                  />

                  <p className="testimonial-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                    dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="cta-container">
                <img
                  src="./assets/images/cta-banner.jpg"
                  alt="summer collection"
                  className="cta-banner"
                />

                <a href="#" className="cta-content">
                  <p className="discount">25% Discount</p>

                  <h2 className="cta-title">Summer collection</h2>

                  <p className="cta-text">Starting @ $10</p>

                  <button className="cta-btn">Shop now</button>
                </a>
              </div>

              <div className="service">
                <h2 className="title">Our Services</h2>

                <div className="service-container">
                  <a href="#" className="service-item">
                    <div className="service-icon">
                      <ion-icon name="boat-outline"></ion-icon>
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">Worldwide Delivery</h3>
                      <p className="service-desc">For Order Over $100</p>
                    </div>
                  </a>

                  <a href="#" className="service-item">
                    <div className="service-icon">
                      <ion-icon name="rocket-outline"></ion-icon>
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">Next Day delivery</h3>
                      <p className="service-desc">UK Orders Only</p>
                    </div>
                  </a>

                  <a href="#" className="service-item">
                    <div className="service-icon">
                      <ion-icon name="call-outline"></ion-icon>
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">Best Online Support</h3>
                      <p className="service-desc">Hours: 8AM - 11PM</p>
                    </div>
                  </a>

                  <a href="#" className="service-item">
                    <div className="service-icon">
                      <ion-icon name="arrow-undo-outline"></ion-icon>
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">Return Policy</h3>
                      <p className="service-desc">Easy & Free Return</p>
                    </div>
                  </a>

                  <a href="#" className="service-item">
                    <div className="service-icon">
                      <ion-icon name="ticket-outline"></ion-icon>
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">30% money back</h3>
                      <p className="service-desc">For Order Over $100</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="container">
            <div className="blog-container has-scrollbar">
              <div className="blog-card">
                <a href="#">
                  <img
                    src="./assets/images/blog-1.jpg"
                    alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                    width="300"
                    className="blog-banner"
                  />
                </a>

                <div className="blog-content">
                  <a href="#" className="blog-category">
                    Fashion
                  </a>

                  <a href="#">
                    <h3 className="blog-title">
                      Clothes Retail KPIs 2021 Guide for Clothes Executives.
                    </h3>
                  </a>

                  <p className="blog-meta">
                    By <cite>Mr Admin</cite> /{" "}
                    <time dateTime="2022-04-06">Apr 06, 2022</time>
                  </p>
                </div>
              </div>

              <div className="blog-card">
                <a href="#">
                  <img
                    src="./assets/images/blog-2.jpg"
                    alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a href="#" className="blog-category">
                    Clothes
                  </a>

                  <h3>
                    <a href="#" className="blog-title">
                      Curbside fashion Trends: How to Win the Pickup Battle.
                    </a>
                  </h3>

                  <p className="blog-meta">
                    By <cite>Mr Robin</cite> /{" "}
                    <time dateTime="2022-01-18">Jan 18, 2022</time>
                  </p>
                </div>
              </div>

              <div className="blog-card">
                <a href="#">
                  <img
                    src="./assets/images/blog-3.jpg"
                    alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a href="#" className="blog-category">
                    Shoes
                  </a>

                  <h3>
                    <a href="#" className="blog-title">
                      EBT vendors: Claim Your Share of SNAP Online Revenue.
                    </a>
                  </h3>

                  <p className="blog-meta">
                    By <cite>Mr Selsa</cite> /{" "}
                    <time dateTime="2022-02-10">Feb 10, 2022</time>
                  </p>
                </div>
              </div>

              <div className="blog-card">
                <a href="#">
                  <img
                    src="./assets/images/blog-4.jpg"
                    alt="Curbside fashion Trends: How to Win the Pickup Battle."
                    className="blog-banner"
                    width="300"
                  />
                </a>

                <div className="blog-content">
                  <a href="#" className="blog-category">
                    Electronics
                  </a>

                  <h3>
                    <a href="#" className="blog-title">
                      Curbside fashion Trends: How to Win the Pickup Battle.
                    </a>
                  </h3>

                  <p className="blog-meta">
                    By <cite>Mr Pawar</cite> /{" "}
                    <time dateTime="2022-03-15">Mar 15, 2022</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-category">
          <div className="container">
            <h2 className="footer-category-title">Brand directory</h2>

            <div className="footer-category-box">
              <h3 className="category-box-title">Fashion :</h3>

              <a href="#" className="footer-category-link">
                T-shirt
              </a>
              <a href="#" className="footer-category-link">
                Shirts
              </a>
              <a href="#" className="footer-category-link">
                shorts & jeans
              </a>
              <a href="#" className="footer-category-link">
                jacket
              </a>
              <a href="#" className="footer-category-link">
                dress & frock
              </a>
              <a href="#" className="footer-category-link">
                innerwear
              </a>
              <a href="#" className="footer-category-link">
                hosiery
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">footwear :</h3>

              <a href="#" className="footer-category-link">
                sport
              </a>
              <a href="#" className="footer-category-link">
                formal
              </a>
              <a href="#" className="footer-category-link">
                Boots
              </a>
              <a href="#" className="footer-category-link">
                casual
              </a>
              <a href="#" className="footer-category-link">
                cowboy shoes
              </a>
              <a href="#" className="footer-category-link">
                safety shoes
              </a>
              <a href="#" className="footer-category-link">
                Party wear shoes
              </a>
              <a href="#" className="footer-category-link">
                Branded
              </a>
              <a href="#" className="footer-category-link">
                Firstcopy
              </a>
              <a href="#" className="footer-category-link">
                Long shoes
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">jewellery :</h3>

              <a href="#" className="footer-category-link">
                Necklace
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
              <a href="#" className="footer-category-link">
                Pendants
              </a>
              <a href="#" className="footer-category-link">
                Crystal
              </a>
              <a href="#" className="footer-category-link">
                Bangles
              </a>
              <a href="#" className="footer-category-link">
                bracelets
              </a>
              <a href="#" className="footer-category-link">
                nosepin
              </a>
              <a href="#" className="footer-category-link">
                chain
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">cosmetics :</h3>

              <a href="#" className="footer-category-link">
                Shampoo
              </a>
              <a href="#" className="footer-category-link">
                Bodywash
              </a>
              <a href="#" className="footer-category-link">
                Facewash
              </a>
              <a href="#" className="footer-category-link">
                makeup kit
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
              <a href="#" className="footer-category-link">
                prefume
              </a>
              <a href="#" className="footer-category-link">
                Body soap
              </a>
              <a href="#" className="footer-category-link">
                scrub
              </a>
              <a href="#" className="footer-category-link">
                hair gel
              </a>
              <a href="#" className="footer-category-link">
                hair colors
              </a>
              <a href="#" className="footer-category-link">
                hair dye
              </a>
              <a href="#" className="footer-category-link">
                sunscreen
              </a>
              <a href="#" className="footer-category-link">
                skin loson
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="container">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Popular Categories</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Fashion
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Electronic
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Cosmetic
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Health
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Watches
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Products</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Delivery
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Legal Notice
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Terms and conditions
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  About us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Secure payment
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address className="content">
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </address>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+607936-8058" className="footer-nav-link">
                  (607) 936-8058
                </a>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" className="footer-nav-link">
                  example@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">
                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <img
              src="./assets/images/payment.png"
              alt="payment method"
              className="payment-img"
            />

            <p className="copyright">
              Copyright &copy; <a href="#">Anon</a> all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
