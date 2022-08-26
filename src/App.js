import productImage from "./images/Product-Image.png";
import { useState } from "react";
import FooterLinkList from "./components/FooterLinkList";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <>
      <div className="promo-bar">FREE SHIPPING ON ALL ORDERS</div>
      <header>
        <button
          onClick={() => setDisplayMenu(!displayMenu)}
          className="btn-menu-mobile"
        ></button>
        <h1 className="logo">logo</h1>
        <nav className={displayMenu && "display-menu"}>
          <ul>
            <li>
              <i
                onClick={() => setDisplayMenu(!displayMenu)}
                class="ri-close-line"
              ></i>
            </li>
            <li>MEN'S</li>
            <li>WOMEN'S</li>
            <li>Accessories</li>
            <li>SALE!</li>
          </ul>
        </nav>
        <span className="search-user-cart">
          <i className="ri-search-line"></i>
          <i className="ri-user-fill"></i>
          <i className="ri-shopping-cart-2-fill"></i>
        </span>
      </header>
      <section className="hero">
        <div className="hero-img-mobile hero-img-1"></div>
        <div className="hero-text-mobile">
          <h2 className="header-1">Shop New Arrivals</h2>
          <p>Our coolest new items are waiting for you!</p>
          <button className="btn-main">SHOP NOW</button>
        </div>
      </section>
      <section className="categories">
        <div className="category-womens">
          <h3 className="header-2">Women's</h3>
        </div>
        <div className="category-mens">
          <h3 className="header-2">Men's</h3>
        </div>
        <div className="accessories">
          <h3 className="header-2">Accessories</h3>
        </div>
      </section>
      <section className="new-arrivals">
        <h2 className="header-1">Shop New Arrivals</h2>
        <div className="product-slider">
          <div className="product">
            <img
              className="product-img"
              src={productImage}
              alt="Women's T-shirt"
            />
            <h4 className="product-title">Product Title</h4>
            <h5 className="product-subtitle">WOMEN'S T-SHIRT</h5>
            <div className="product-price">$19.99</div>
          </div>
          <div className="product">
            <img
              className="product-img"
              src={productImage}
              alt="Women's T-shirt"
            />
            <h4 className="product-title">Product Title</h4>
            <h5 className="product-subtitle">WOMEN'S T-SHIRT</h5>
            <div className="product-price">$19.99</div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-img-mobile hero-img-2"></div>
        <div className="hero-text-mobile">
          <h2 className="header-1">Our Favorite Tees</h2>
          <p>Everyday Tees you need!</p>
          <button className="btn-main">SHOP NOW</button>
        </div>
      </section>
      <section className="signup">
        <h3 className="header-2">
          <i class="ri-mail-fill"></i> <span>Sign up &amp; Stay Connected</span>
        </h3>
        <p>
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
        <button className="btn-main">SUBSCRIBE</button>
      </section>
      <footer>
        <FooterLinkList
          title="Customer Service"
          listArr={[
            "Accessibility",
            "Contact Us",
            "Return Policy",
            "FAQ",
            "Gift Certificates",
            "Wishlist",
          ]}
        />
        <FooterLinkList
          title="Company"
          listArr={["About Us", "Careers", "Press", "Affiliates"]}
        />
        <div class="follow-us">
          <h2 class="header-footer">Follow us</h2>
          <ul>
            <li>
              <i class="ri-facebook-fill"></i>
            </li>
            <li>
              <i class="ri-instagram-line"></i>
            </li>
            <li>
              <i class="ri-twitter-fill"></i>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
