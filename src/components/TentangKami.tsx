import { motion } from 'framer-motion';
import { CircleDollarSign, Users, Clock, Coffee } from 'lucide-react';

export default function TentangKami() {
  const stats = [
    {
      id: 1,
      icon: <CircleDollarSign className="w-6 h-6 text-santoey-sage" />,
      value: "< Rp15k",
      label: "Sangat Murah",
      desc: "Harga menu bersahabat, pas untuk dompet mahasiswa akhir bulan"
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-santoey-sage" />,
      value: "10-35",
      label: "Kapasitas Cozy",
      desc: "Sangat pas untuk belajar kelompok atau kumpul komunitas kecil"
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6 text-santoey-sage" />,
      value: "13 Jam",
      label: "Buka Setiap Hari",
      desc: "Jam operasional 10:00 - 23:00 WIB, siap temani lembur tugas"
    },
    {
      id: 4,
      icon: <Coffee className="w-6 h-6 text-santoey-sage" />,
      value: "Rp 0",
      label: "Tanpa Biaya Sewa",
      desc: "Bebas nugas sepuasnya tanpa biaya tambahan per jam"
    }
  ];

  return (
    <section id="tentang" className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Kolom Kiri: Narasi Cerita */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-santoey-sage font-bold tracking-widest uppercase text-sm">
              Cerita Santoey
            </span>
            <h2 className="text-4xl font-serif font-bold text-santoey-dark leading-tight">
              Fasilitas Kafe Mewah,<br />
              <span className="text-santoey-lightbrown">Harga Warung Kaki Lima.</span>
            </h2>
            <p className="text-santoey-brown/80 leading-relaxed text-lg">
              Kami paham drama mahasiswa di Bandung: ingin tempat nugas yang estetik dan tenang, 
              colokan melimpah, serta internet kencang—tapi dompet menangis karena harga kopi segelas 
              setara sekali makan sehari.
            </p>
            <p className="text-santoey-brown/80 leading-relaxed">
              <strong className="font-bold text-santoey-dark">Kedai Santoey</strong> hadir dengan konsep <strong className="font-bold text-santoey-lightbrown">"Fasilitas Kafe, Harga Warung"</strong>. Visual bangunan kami sudah estetik dan "nyantoey" asli secara alami, menghadirkan kenyamanan semi-outdoor yang sejuk khas Bandung. Dengan pelayanan staf yang super ramah dan akrab layaknya sahabat sendiri, Kedai Santoey adalah ruang produktif terbaik untuk nugas mandiri maupun kumpul kelompok kecil tanpa takut boncos.
            </p>
          </motion.div>

          {/* Kolom Kanan: Grid Statistik */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-default"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-santoey-sage/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-santoey-dark tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-santoey-dark text-lg mb-1">{stat.label}</h4>
                  <p className="text-sm text-santoey-brown/70 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
