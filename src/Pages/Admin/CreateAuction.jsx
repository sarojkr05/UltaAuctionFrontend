import React from "react";
import AuctionSvg from '../../assets/auctionsvg.svg'
import Layout from '../../Layout/Layout'

function CreateAuction() {
  return (
    <Layout>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      <div className="hidden md:block">
      <img src={AuctionSvg} alt="Auction Image" className="h-[400px] w-[400px]"/>
      </div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Create New Auction
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Auction Title"
            //   value={formData.title}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            //   value={formData.description}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="startingBid"
            placeholder="Starting Bid"
            //   value={formData.startingBid}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="bidIncrement"
            placeholder="Bid Increment"
            //   value={formData.bidIncrement}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="datetime-local"
            name="endTime"
            //   value={formData.endTime}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="maxSlots"
            placeholder="Max Slots"
            //   value={formData.maxSlots}
            //   onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="file"
            name="auctionImage"
            accept="image/*"
            //   onChange={handleChange}
            required
            className="w-full cursor-pointer"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"
          >
            Create Auction
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default CreateAuction;
