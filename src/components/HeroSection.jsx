import "../assets/styles.css";
import heroImage from "../assets/image.jpg";

const HeroSection = () => {
  return (
    <div className="container hero">
      <div className="hero-text">
        <h1>Create your online videos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.</p>
        <button>Get started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
