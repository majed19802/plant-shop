import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, where green meets serenity. 
          We are passionate about bringing nature into your home with our 
          carefully curated collection of beautiful houseplants. 
          Transform your living space into a green oasis today!
        </p>
        <Link to="/products">
          <button className="btn-get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
