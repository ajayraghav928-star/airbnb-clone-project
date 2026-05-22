function Hero() {
  return (

    <div
      className="h-[400px] md:h-[500px] bg-cover bg-center rounded-3xl overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >

      <div className="bg-black/40 w-full h-full flex items-center justify-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          Find your next stay
        </h1>

      </div>

    </div>

  )
}

export default Hero