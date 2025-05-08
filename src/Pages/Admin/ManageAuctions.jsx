import React from 'react'

const sampleAuctions = [
    { id: 'A101', title: 'iPhone 14 Pro', status: 'active', bids: 34 },
    { id: 'A102', title: 'Gaming Laptop', status: 'completed', bids: 52 },
    { id: 'A103', title: 'Smart Watch', status: 'active', bids: 12 },
  ];

function ManageAuctions() {
    const handleDelete = (id) => {
        toast.success(`Auction ${id} deleted successfully`);
        // TODO: Call your delete API here
      }
    return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Auctions</h2>
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Auction ID</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Total Bids</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleAuctions.map((auction) => (
                  <tr key={auction.id} className="border-t">
                    <td className="px-4 py-2">{auction.id}</td>
                    <td className="px-4 py-2">{auction.title}</td>
                    <td className="px-4 py-2 capitalize">{auction.status}</td>
                    <td className="px-4 py-2">{auction.bids}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(auction.id)}
                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {sampleAuctions.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                      No auctions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default ManageAuctions
