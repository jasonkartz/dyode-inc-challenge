import Carousel from "react-multi-carousel";
export default function HeroSlider() {
  const responsiveHero = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="hero">
      <Carousel
        responsive={responsiveHero}
        infinite={true}
        showDots={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={8000}
        dotListClass="hero-dots"
      >
        <div>
          <div className="hero-img-mobile hero-slide-1 hero-img-1"></div>
          <div className="hero-text-mobile">
            <h2 className="header-1">Shop New Arrivals</h2>
            <p>Our coolest new items are waiting for you!</p>
            <button className="btn-main">SHOP NOW</button>
          </div>
        </div>
        <div>
          <div className="hero-img-mobile hero-img-1 hero-slide-2"></div>
          <div className="hero-text-mobile">
            <h2 className="header-1">Our Fave Tees</h2>
            <p>Shop all of our favorites.</p>
            <button className="btn-main">SHOP NOW</button>
          </div>
        </div>
        <div>
          <div className="hero-img-mobile hero-img-1 hero-slide-3"></div>
          <div className="hero-text-mobile">
            <h2 className="header-1">Men's Tees</h2>
            <p>Find the perfect shirt.</p>
            <button className="btn-main">SHOP NOW</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
