import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-title">CryptoApp</span>
        <span className="footer-copyright">All rights reserved</span>
        <nav className="footer-nav">
          <ul className="footer-links">
            <li className="footer-link"><Link to="/">Home</Link></li>
            <li className="footer-link"><Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
            <li className="footer-link"><Link to="/news">News</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;