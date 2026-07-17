import React from "react";

function Dashboard() {
  const farmers = [
    {
      id: 1,
      name: "Ramesh Kumar",
      village: "Meerut",
      status: "Approved",
    },
    {
      id: 2,
      name: "Suresh Singh",
      village: "Agra",
      status: "Pending",
    },
    {
      id: 3,
      name: "Anita Devi",
      village: "Lucknow",
      status: "Approved",
    },
  ];

  const orders = [
    {
      id: 1,
      customer: "Rahul Sharma",
      product: "Organic Wheat",
      amount: "₹700",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Priya Singh",
      product: "Fresh Tomatoes",
      amount: "₹450",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Amit Verma",
      product: "Rice",
      amount: "₹1200",
      status: "Shipped",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Customer",
    },
    {
      id: 2,
      name: "Ramesh Kumar",
      role: "Farmer",
    },
    {
      id: 3,
      name: "Admin",
      role: "Admin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-700">
          🌾 Admin Dashboard
        </h1>

        <p className="text-gray-600">
          Welcome to the KisanSetu Administration Panel
        </p>
      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Total Farmers</h3>
          <h2 className="text-3xl font-bold text-green-600 mt-2">245</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Customers</h3>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">540</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Products</h3>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">810</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Orders</h3>
          <h2 className="text-3xl font-bold text-purple-600 mt-2">385</h2>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h2 className="text-2xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            👨‍🌾 Manage Farmers
          </button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            👥 Manage Customers
          </button>

          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
            🌾 Manage Products
          </button>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            📜 Government Schemes
          </button>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            📦 View Orders
          </button>

        </div>

      </div>

      {/* Farmers */}

      <div className="bg-white shadow rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Recently Registered Farmers
        </h2>

        <table className="w-full">

          <thead>

            <tr className="bg-green-100">
              <th className="p-3 text-left">Farmer</th>
              <th className="p-3 text-left">Village</th>
              <th className="p-3 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {farmers.map((farmer) => (
              <tr key={farmer.id} className="border-b">

                <td className="p-3">{farmer.name}</td>

                <td className="p-3">{farmer.village}</td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      farmer.status === "Approved"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {farmer.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Orders */}

      <div className="bg-white shadow rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Recent Orders
        </h2>

        <table className="w-full">

          <thead>

            <tr className="bg-blue-100">
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (
              <tr key={order.id} className="border-b">

                <td className="p-3">{order.customer}</td>

                <td className="p-3">{order.product}</td>

                <td className="p-3">{order.amount}</td>

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

      {/* Users */}

      <div className="bg-white shadow rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Recent Users
        </h2>

        <table className="w-full">

          <thead>

            <tr className="bg-gray-200">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <tr key={user.id} className="border-b">

                <td className="p-3">{user.name}</td>

                <td className="p-3">{user.role}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Analytics */}

      <div className="bg-white shadow rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-semibold mb-4">
          📈 Analytics
        </h2>

        <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">
            Sales & User Analytics Chart will appear here.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;