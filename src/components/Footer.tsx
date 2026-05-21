import { Camera, MapPin, Phone, Coffee, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-santoey-dark text-santoey-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-santoey-sage h-8 w-8" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Kedai Santoey
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Fasilitas kafe, harga warung. Tempat paling pewe buat kelarin tugas tanpa bikin kantong bolong.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <div className="space-y-4 text-white/70">
              <a href="https://wa.me/628139875672" className="flex items-center gap-3 hover:text-santoey-sage transition-colors">
                <Phone size={20} />
                <span>+62 813-9875-672</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-santoey-sage transition-colors">
                <Camera size={20} />
                <span>@KedaiSantoey</span>
              </a>
            </div>
          </div>

          {/* Kolom 3 - Lokasi & Maps */}
          <div id="lokasi">
            <h4 className="font-bold text-lg mb-6 text-white">Lokasi</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  Jl. Rana No.1,<br />
                  Kota Bandung,<br />
                  Jawa Barat 40111
                </p>
              </div>
              
              {/* Maps Iframe */}
              <div className="w-full h-32 rounded-xl overflow-hidden mt-2 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Jl.%20Rana%20No.1,%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Kedai Santoey"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Tautan ke Google Maps (Sesuai request) */}
              <a 
                href="https://maps.app.goo.gl/oBU2qbX1tPvgYXCq7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-santoey-sage hover:text-white font-medium transition-colors w-max mt-1"
              >
                Buka di Google Maps <ExternalLink size={16} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2026 Kedai Santoey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
