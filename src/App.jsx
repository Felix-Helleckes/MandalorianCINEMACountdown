import Hero from './components/Hero'
import Trailer from './components/Trailer'
import Characters from './components/Characters'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Stars from './components/Stars'

function App() {
  return (
    <div className="app">
      <Stars />
      <Hero />
      <Characters />
      <Trailer />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
