import React from "react";

function Dashboard() {
  const myProducts = [
    {
      id: 1,
      name: "Organic Wheat",
      quantity: "150 Kg",
      price: "₹35/Kg",
      status: "Available",
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      quantity: "80 Kg",
      price: "₹40/Kg",
      status: "Sold Out",
    },
    {
      id: 3,
      name: "Potatoes",
      quantity: "200 Kg",
      price: "₹25/Kg",
      status: "Available",
    },
  ];

  const recentOrders = [
    {
      id: 1,
      customer: "Rahul Sharma",
      product: "Organic Wheat",
      quantity: "20 Kg",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Priya Singh",
      product: "Fresh Tomatoes",
      quantity: "15 Kg",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Amit Verma",
      product: "Potatoes",
      quantity: "30 Kg",
      status: "Shipped",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-700">
          🌾 Farmer Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome to KisanSetu! Manage your crops, products, and orders.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">My Products</h3>
          <h2 className="text-3xl font-bold text-green-600 mt-2">18</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Orders Received</h3>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">36</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Monthly Earnings</h3>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">₹52,400</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Pending Orders</h3>
          <h2 className="text-3xl font-bold text-red-500 mt-2">7</h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            ➕ Add Product
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            📦 View Orders
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
            🌱 Manage Crops
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
            📜 Government Schemes
          </button>
        </div>
      </div>

      {/* My Products */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-5">My Products</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {myProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.quantity}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      product.status === "Available"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Orders */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-5">Recent Orders</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Weather & Tips */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">🌤 Today's Weather</h2>
          <p className="text-lg">Temperature: 29°C</p>
          <p>Humidity: 72%</p>
          <p>Condition: Partly Cloudy</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">🌱 Farming Tips</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Water crops early in the morning.</li>
            <li>Use organic fertilizers whenever possible.</li>
            <li>Inspect crops regularly for pests.</li>
            <li>Check weather forecasts before irrigation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;