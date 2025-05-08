import React from 'react'

function Dashboard() {
    return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Welcome Admin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-sm text-gray-500">Total Users</h3>
              <p className="text-2xl font-bold">245</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-sm text-gray-500">Active Auctions</h3>
              <p className="text-2xl font-bold">38</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-sm text-gray-500">Completed Auctions</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-sm text-gray-500">Reports Today</h3>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </div>
      );
}

export default Dashboard
