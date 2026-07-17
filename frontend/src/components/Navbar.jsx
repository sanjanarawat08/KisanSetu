import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Dashboard route based on role
  const dashboardLink = user
    ? user.role === "admin"
      ? "/admin/dashboard"
      : user.role === "farmer"
      ? "/farmer/dashboard"
      : "/customer/dashboard"
    : "/login";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌾 KisanSetu
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/schemes">Government Schemes</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        {/* Dashboard */}
        {user && (
          <li>
            <Link to={dashboardLink}>Dashboard</Link>
          </li>
        )}

        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li className="welcome-user">
              Welcome, {user.name}
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;