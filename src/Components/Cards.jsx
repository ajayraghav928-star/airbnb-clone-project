const data = [
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Beautiful Villa",
    location: "Goa",
    price: "₹4,500/night",
    rating: "4.8",
  },

  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title: "Modern Apartment",
    location: "Bangalore",
    price: "₹3,200/night",
    rating: "4.7",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Luxury Room",
    location: "Mumbai",
    price: "₹5,000/night",
    rating: "4.9",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    title: "Beach House",
    location: "Kerala",
    price: "₹6,200/night",
    rating: "4.6",
  },
]

function Cards() {
  return (
    <div className="p-4 md:p-6">

      <h1 className="text-3xl font-bold mb-6">
        Popular Stays
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {data.map((item, index) => (

          <div
            key={index}
  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-300 cursor-pointer w-full"
            
          >

            <img
              src={item.image}
              className="h-52 md:h-60 w-full object-cover"
            />

            <div className="p-4">

              <h2 className="font-bold text-lg">
                {item.title}
              </h2>

              <p className="text-gray-500">
                {item.location}
              </p>

              <div className="flex justify-between items-center mt-2">

                <p className="font-semibold">
                  {item.price}
                </p>

                <p className="text-yellow-500 font-bold">
                  ⭐ {item.rating}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
export default Cards