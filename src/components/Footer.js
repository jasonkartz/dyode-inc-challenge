import FooterLinkList from "./FooterLinkList";

export default function Footer() {
  return (
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
  );
}
