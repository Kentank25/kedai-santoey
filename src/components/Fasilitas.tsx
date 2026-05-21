import { Plug, Wifi, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Fasilitas() {
  const facilities = [
    {
      id: 1,
      icon: <Plug className="w-8 h-8 text-white" />,
      title: "Stop Kontak Ganda",
      desc: "Tersedia stop kontak ganda berkualitas di setiap sudut meja. Bebas isi daya laptop dan HP sekaligus."
    },
    {
      id: 2,
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "WiFi Fiber Dedicated",
      desc: "Koneksi internet serat optik berkecepatan tinggi yang stabil untuk pengerjaan tugas berat dan kelancaran Zoom."
    },
    {
      id: 3,
      icon: <Wind className="w-8 h-8 text-white" />,
      title: "Semi-Outdoor Sejuk",
      desc: "Desain area terbuka hijau berkerikil dan teduh dengan hembusan angin alami Bandung, dijamin sejuk bebas pengap."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="fasilitas" className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark mb-4">
            Fasilitas Andalan WFC
          </h2>
          <p className="text-lg text-santoey-brown/70">
            Didesain khusus untuk kenyamanan kamu nugas seharian.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {facilities.map((f) => (
            <motion.div 
              key={f.id} 
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:border-santoey-sage/30 transition-all hover:shadow-xl hover:-translate-y-1 group cursor-default"
            >
              <div className="w-16 h-16 bg-santoey-sage rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-santoey-dark mb-3">{f.title}</h3>
              <p className="text-santoey-brown/80 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
