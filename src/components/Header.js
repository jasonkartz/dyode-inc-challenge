import { useState } from "react";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
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
  );
}
