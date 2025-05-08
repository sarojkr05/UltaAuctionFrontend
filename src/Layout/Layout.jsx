import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuctionLogo from "../assets/AucionLogo.jpg";
import Footer from '../Components/Footer';

function Layout({ children }) {
    const navigate = useNavigate();
  return (
    <div>
      <nav className="flex items-center justify-around h-16 px-6 text-gray-600 font-mono shadow-md">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p className="text-xl font-semibold text-black">UltaAuction</p>
        <img src={AuctionLogo} alt="UltaAuction Logo" className="h-10 w-auto rounded-full" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:block">
        <ul className="flex gap-6 text-l">
          <li className="hover:text-blue-500 cursor-pointer">
            <p>Auctions</p>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <p>How It Works</p>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <p>About</p>
          </li>
        </ul>
      </div>

      {/* Auth Section */}
      {/* <div>
        <ul className="flex gap-4 text-sm">
          <li className="hover:text-orange-500">
            {isLoggedIn ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div> */}
    </nav>

      { children }

      <Footer />
    </div>
  )
}

export default Layout
