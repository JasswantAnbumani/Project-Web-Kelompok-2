import './Hero.css';
import CosmicType from './Cosmictype';

function Hero() {
  return (
    <div className="hero-container" id="hero">
      <video autoPlay loop muted className="bg-video">
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <CosmicType text="🛰 Booting up Nebulix Core AI..." speed={50} />
        <h1 className="hero-title">Latest Cosmic Reads</h1>
        <p className="hero-subtitle">Explore the universe of knowledge, one article at a time.</p>
        <a href="#articles" className="hero-button">Start Exploring</a>
      </div>
    </div>
  );
}

export default Hero;
