import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fasilitas from './components/Fasilitas';
import MenuHighlight from './components/MenuHighlight';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mesh-warm selection:bg-santoey-sage/30 selection:text-santoey-dark">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Fasilitas />
        <MenuHighlight />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App;
