import {
  FaUmbrellaBeach,
  FaMountain,
  FaCampground,
  FaTree,
  FaHome,
} from "react-icons/fa"

function Categories() {

  const items = [
    {
      icon: <FaUmbrellaBeach />,
      name: "Beach",
    },

    {
      icon: <FaMountain />,
      name: "Mountain",
    },

    {
      icon: <FaCampground />,
      name: "Camping",
    },

    {
      icon: <FaTree />,
      name: "Nature",
    },

    {
      icon: <FaHome />,
      name: "Cabins",
    },
  ]

  return (

    <div className="flex justify-center gap-10 p-6 overflow-x-auto border-b">

      {items.map((item, index) => (

        <div
          key={index}
          className="flex flex-col items-center cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300"
        >

          <div className="text-3xl mb-2">
            {item.icon}
          </div>

          <p className="font-medium text-gray-700">
            {item.name}
          </p>

        </div>

      ))}

    </div>

  )
}

export default Categories