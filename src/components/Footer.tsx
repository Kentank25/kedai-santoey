import { Instagram, MapPin, Phone, Coffee, ExternalLink } from 'lucide-react';

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
              Menghadirkan fasilitas kafe berkualitas dengan harga warung yang bersahabat. Ruang produktif ternyaman di Bandung untuk belajar, bekerja, dan berkolaborasi.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <div className="space-y-4 text-white/70">
              <a href="https://wa.me/628139875672" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-santoey-sage transition-all duration-300">
                <Phone size={20} />
                <span>+62 813-9875-672</span>
              </a>
              <a href="https://instagram.com/kedai.santoey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-santoey-sage transition-all duration-300">
                <Instagram size={20} />
                <span>@kedai.santoey (Instagram)</span>
              </a>
              <a href="https://tiktok.com/@kedai.santoey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-santoey-sage transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-1.06-.8-1.8-1.97-2.22-3.23-.03 2.94-.02 5.89-.03 8.83-.07 2.11-.94 4.21-2.61 5.5-1.75 1.43-4.21 1.94-6.41 1.4-2.28-.5-4.24-2.19-4.9-4.42-.92-3.08.31-6.61 3.01-8.25.99-.6 2.12-.91 3.28-.93.01 1.96 0 3.92.01 5.88-.63.02-1.28.2-1.81.56-.9.6-1.39 1.69-1.26 2.76.12 1.13.93 2.11 2.02 2.39.95.26 2.02-.04 2.66-.8.61-.71.82-1.69.78-2.6-.01-5.18 0-10.36-.01-15.54z"/>
                </svg>
                <span>@kedai.santoey (TikTok)</span>
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
