import { Quote, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "Tempatnya sangat nyaman untuk belajar kelompok dan berdiskusi. Harganya sangat ramah ala warung mahasiswa, tanpa mengorbankan kualitas fasilitas. Tidak menyangka tempat se-estetik ini memiliki harga sebersahabat ini.",
      author: "Adit",
      role: "Mahasiswa ITB"
    },
    {
      id: 2,
      text: "Koneksi WiFi serat optik sangat cepat dan stabil, dengan stop kontak yang melimpah di setiap sudut. Sop iganya lezat sekali untuk menemani produktivitas hingga malam.",
      author: "Siti",
      role: "Mahasiswa Unpad"
    },
    {
      id: 3,
      text: "Suasananya sangat kondusif untuk fokus bekerja secara mandiri maupun melakukan koordinasi tim. Kopi susu gula arennya lezat dan wajib dicoba!",
      author: "Rizky",
      role: "Freelancer / Web Developer"
    }
  ];

  return (
    <section id="testimoni" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark mb-4">
            Ulasan Pengunjung Setia
          </h2>
          <p className="text-lg text-santoey-brown/70">
            Berikut adalah pengalaman nyata dari mahasiswa, pekerja lepas, hingga komunitas yang telah merasakan kenyamanan kolaborasi di Kedai Santoey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-santoey-sage/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-santoey-brown/10" />
              
              <div className="relative z-10">
                {/* Rating Bintang Emas Premium */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" className="stroke-amber-400" />
                  ))}
                </div>
                
                <p className="text-santoey-brown/80 leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 rounded-full bg-santoey-sage/20 flex items-center justify-center text-santoey-sage font-bold text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-santoey-dark">{review.author}</h4>
                  <p className="text-sm text-santoey-brown/60">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bagikan Ulasan di Google Maps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto text-center bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl md:text-2xl font-serif font-bold text-santoey-dark mb-3">
            Punya Pengalaman Seru di Kedai Santoey?
          </h3>
          <p className="text-santoey-brown/80 leading-relaxed mb-6 text-sm md:text-base">
            Bagikan ulasan berharga Anda saat belajar kelompok, WFC, atau berkumpul bersama komunitas di Google Maps. Setiap ulasan Anda sangat berarti bagi kami untuk terus menyempurnakan kenyamanan fasilitas kedai!
          </p>
          <a 
            href="https://maps.app.goo.gl/oBU2qbX1tPvgYXCq7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-santoey-brown hover:bg-santoey-lightbrown text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-98 cursor-pointer"
          >
            Tulis Ulasan di Google Maps <ExternalLink size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
