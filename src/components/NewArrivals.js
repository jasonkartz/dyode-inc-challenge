import Carousel from "react-multi-carousel";
import productImage from "../images/Product-Image.png";

export default function NewArrivals() {
  const responsiveProduct = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <section className="new-arrivals">
      <h2 className="header-1">Shop New Arrivals</h2>
      <Carousel
        responsive={responsiveProduct}
        infinite={true}
        centerMode={false}
        containerClass="product-slider"
        itemClass="product-slider-item"
      >
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
      </Carousel>
    </section>
  );
}
