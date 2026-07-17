import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      setIsError(false);
      setMessage(response.data.message);

      // Save user with role
      const loggedInUser = {
        ...response.data.user,
        role: loginData.role,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(loggedInUser)
      );

      // Redirect according to role
      setTimeout(() => {
        switch (loginData.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;

          case "farmer":
            navigate("/farmer/dashboard");
            break;

          case "customer":
          default:
            navigate("/customer/dashboard");
            break;
        }
      }, 1000);

    } catch (error) {
      setIsError(true);

      setMessage(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {message && (
          <div
            className={
              isError
                ? "error-message"
                : "success-message"
            }
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={loginData.role}
            onChange={handleChange}
          >
            <option value="customer">
              Customer
            </option>

            <option value="farmer">
              Farmer
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <div className="password-field">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="show-password-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <p className="signup-link">
          New user?{" "}
          <Link to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;