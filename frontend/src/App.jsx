import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import "./App.css";

function App() {
  return (
    <Router>
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
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;