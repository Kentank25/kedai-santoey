import { Plug, Wifi, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Fasilitas() {
  const facilities = [
    {
      id: 1,
      icon: <Plug className="w-8 h-8 text-white" />,
      title: "Stop Kontak Ganda",
      desc: "Tersedia stop kontak ganda berkualitas di setiap sudut meja. Mengisi daya laptop dan gawai secara bersamaan menjadi lebih mudah."
    },
    {
      id: 2,
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "WiFi Fiber Dedicated",
      desc: "Koneksi internet serat optik berkecepatan tinggi yang stabil, dirancang khusus untuk pengerjaan proyek berat serta kelancaran rapat daring."
    },
    {
      id: 3,
      icon: <Wind className="w-8 h-8 text-white" />,
      title: "Semi-Outdoor Sejuk",
      desc: "Desain area terbuka hijau berkerikil yang asri di bawah hembusan angin alami Bandung, menghadirkan kesegaran sirkulasi udara optimal."
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
            Didesain khusus untuk menunjang kenyamanan produktivitas Anda sepanjang hari.
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
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-santoey-sage/40 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 bg-santoey-sage rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md shadow-santoey-sage/20">
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
