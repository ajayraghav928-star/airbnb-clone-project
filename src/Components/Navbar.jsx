import { FaSearch, FaUserCircle } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-sm border-b sticky top-0 bg-white z-50">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-red-500 cursor-pointer">
        airbnb
      </h1>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">

        <p className="font-medium text-sm">
          Anywhere
        </p>

        <span className="mx-2 text-gray-400">|</span>

        <p className="font-medium text-sm">
          Any Week
        </p>

        <span className="mx-2 text-gray-400">|</span>

        <p className="text-gray-500 text-sm">
          Add Guests
        </p>

        <div className="bg-red-500 p-2 rounded-full ml-3">
          <FaSearch className="text-white text-sm" />
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <button className="hidden md:block font-medium hover:bg-gray-100 px-4 py-2 rounded-full">
          Airbnb your home
        </button>

        <div className="flex items-center gap-3 border rounded-full px-3 py-2 shadow-sm hover:shadow-md cursor-pointer">

          <HiMenu className="text-xl" />

          <FaUserCircle className="text-2xl text-gray-500" />

        </div>

      </div>

    </div>
  )
}

export default Navbar