import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-santoey-cream/90 backdrop-blur-md border-b border-santoey-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Coffee className="text-santoey-sage h-8 w-8" />
            <span className="font-bold text-2xl tracking-tight text-santoey-dark">
              Kedai Santoey
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#fasilitas" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Fasilitas</a>
            <a href="#tentang" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Tentang</a>
            <a href="#basecamp" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Basecamp</a>
            <a href="#galeri" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Galeri</a>
            <a href="#menu" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Menu</a>
            <a href="#testimoni" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Testimoni</a>
            <a href="#lokasi" className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium">Lokasi</a>
          </div>

          <div>
            <a 
              href="https://wa.me/628139875672" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-santoey-brown hover:bg-santoey-lightbrown text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
