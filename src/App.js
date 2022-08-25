function App() {
  return (
    <>
      <div className="promo-bar">FREE SHIPPING ON ALL ORDERS</div>
      <header>
        <button className="btn-menu-mobile"></button>
        <h1 className="logo">logo</h1>
        <span className="search-user-cart">
          <i className="ri-search-line"></i>
          <i className="ri-user-fill"></i>
          <i className="ri-shopping-cart-2-fill"></i>
        </span>
      </header>
      <section className="hero">
        <div className="hero-image-mobile"></div>
        <div className="hero-text-mobile">
          <h2 className="header-1">Shop New Arrivals</h2>
          <p>Our coolest new items are waiting for you!</p>
          <button className="btn-main">SHOP NOW</button>
        </div>
      </section>
      <section class="categories">
        <div class="category-womens">
          <h3 class="header-2">Women's</h3>
        </div>
        <div class="category-mens">
          <h3 class="header-2">Men's</h3>
        </div>
        <div class="accessories">
          <h3 class="header-2">Accessories</h3>
        </div>
      </section>
    </>
  );
}

export default App;
