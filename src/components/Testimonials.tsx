import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "Tempatnya asik banget buat nugas kelompok, harganya jujur ala warungan! Gak nyangka cafe estetik harganya semurah ini.",
      author: "Adit",
      role: "Mahasiswa ITB"
    },
    {
      id: 2,
      text: "Wifi-nya beneran kenceng, colokan dimana-mana. Sop iganya juara sih buat nemenin nugas sampe malem.",
      author: "Siti",
      role: "Mahasiswa Unpad"
    },
    {
      id: 3,
      text: "Vibe-nya santoey abis. Cocok buat nugas sendirian atau nongkrong santai. Kopi susunya enak banget!",
      author: "Rizky",
      role: "Freelancer"
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
            Kata Mereka yang Udah Mampir
          </h2>
          <p className="text-lg text-santoey-brown/70">
            Bukan sekadar janji, ini bukti kalau Kedai Santoey itu tempat paling pewe.
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
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-santoey-brown/10" />
              <p className="text-santoey-brown/80 leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
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

      </div>
    </section>
  );
}
