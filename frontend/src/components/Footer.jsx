import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">🌾 KisanSetu</h2>

          <p>
            Empowering farmers through technology and connecting them with
            government schemes, opportunities, and agricultural resources.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/schemes">Government Schemes</a>
          
        </div>

        {/* Contact + Social */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p><FaEnvelope /> support@kisansetu.com</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaMapMarkerAlt /> India</p>

          <div className="social-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 KisanSetu • Empowering Farmers Across India 🇮🇳
      </div>
    </footer>
  );
}

export default Footer;