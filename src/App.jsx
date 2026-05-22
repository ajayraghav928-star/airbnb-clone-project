import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Categories from "./Components/Categories"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Categories/>
      <Cards />
      <Footer />
    </div>
  )
}

export default App