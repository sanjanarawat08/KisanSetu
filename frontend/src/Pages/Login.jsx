import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", loginData);

    setMessage("Login Successful! Redirecting...");

    // Redirect to home page after 1 second
    setTimeout(() => {
      navigate("/");
    }, 1000);

    // Later connect with backend API
    // axios.post("/api/login", loginData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {message && <div className="success-message">{message}</div>}

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
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
          </select>

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-password-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-link">
          New user? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;