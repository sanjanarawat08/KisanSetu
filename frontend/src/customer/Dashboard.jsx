import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="dashboard-main">

        <div className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <p>Buy fresh products directly from farmers.</p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Orders</h3>
            <h2>12</h2>
          </div>

          <div className="card">
            <h3>Cart Items</h3>
            <h2>5</h2>
          </div>

          <div className="card">
            <h3>Wishlist</h3>
            <h2>8</h2>
          </div>

          <div className="card">
            <h3>Available Products</h3>
            <h2>240</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;