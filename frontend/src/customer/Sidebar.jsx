import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>🌾 KisanSetu</h2>

      <ul>

        <li><Link to="/customer/dashboard">🏠 Dashboard</Link></li>

        <li><Link to="/customer/products">🌾 Products</Link></li>

        <li><Link to="/customer/cart">🛒 Cart</Link></li>

        <li><Link to="/customer/orders">📦 Orders</Link></li>

        <li><Link to="/customer/wishlist">❤️ Wishlist</Link></li>

        <li><Link to="/customer/profile">👤 Profile</Link></li>

        <li><Link to="/customer/settings">⚙ Settings</Link></li>

      </ul>

    </div>
  );
}

export default Sidebar;