import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

// Dashboards
import AdminDashboard from "./admin/Dashboard";
import FarmerDashboard from "./farmer/Dashboard";
import CustomerDashboard from "./customer/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>

      {/* Navbar is visible on every page */}
      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Home />
                <Feedback />
              </>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/farmer/dashboard"
            element={<FarmerDashboard />}
          />

          <Route
            path="/customer/dashboard"
            element={<CustomerDashboard />}
          />

        </Routes>
      </main>

      {/* Footer is visible on every page */}
      <Footer />

    </Router>
  );
}

export default App;