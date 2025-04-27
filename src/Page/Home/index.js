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
import Products from "../../components/products";
import Blogs from "../../components/Blogs";
import Footers from "../../components/Footers";

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
        <Products />

        <Blogs />
      </main>
      < Footers />
    </>
  );
};

export default Homepage;
