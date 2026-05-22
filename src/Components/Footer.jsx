import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"

function Footer() {
  return (

    <div className="bg-gray-100 mt-16 p-8 rounded-t-3xl">

      <div className="flex flex-col md:flex-row justify-between items-center">

        <h1 className="text-2xl font-bold text-red-500">
          airbnb
        </h1>

        <div className="flex gap-5 text-2xl mt-4 md:mt-0">

          <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />

          <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

          <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />

        </div>

      </div>

      <p className="text-center mt-6 text-gray-500">
        © 2026 Airbnb Clone. All rights reserved.
      </p>

    </div>

  )
}

export default Footer