import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
                onClick={handleLogout}
                className="logout-btn"
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