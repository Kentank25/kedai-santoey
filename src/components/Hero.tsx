import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-6xl font-serif font-extrabold text-santoey-dark leading-tight mb-6">
              Kerja & Belajar Produktif, <br />
              <span className="text-santoey-lightbrown">Dompet Tetap Santoey.</span>
            </h1>
            <p className="text-lg text-santoey-brown/80 mb-8 leading-relaxed">
              Fasilitas lengkap standar kafe dengan harga warung yang sangat bersahabat. Ruang produktif ternyaman untuk menyelesaikan pekerjaan kantor, tugas kuliah, WFC, hingga diskusi kolaboratif.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-santoey-sage hover:bg-santoey-sage/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2">
                Lihat Menu <ArrowRight size={20} />
              </a>
              <a 
                href="https://maps.app.goo.gl/oBU2qbX1tPvgYXCq7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-santoey-brown/20 hover:border-santoey-brown/40 text-santoey-brown px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2"
              >
                <MapPin size={20} /> Cek Lokasi
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mt-12 lg:mt-0 group"
          >
            <div className="absolute inset-0 bg-santoey-sage/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-1 group-hover:scale-100 transition-all duration-500"></div>
            <img 
              src="/suasana-kedai.jpg" 
              alt="Suasana Kedai Santoey" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
