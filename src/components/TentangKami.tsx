import { motion } from 'framer-motion';
import { CircleDollarSign, Users, Clock, Coffee } from 'lucide-react';

export default function TentangKami() {
  const stats = [
    {
      id: 1,
      icon: <CircleDollarSign className="w-6 h-6 text-santoey-sage" />,
      value: "< Rp15k",
      label: "Harga Terjangkau",
      desc: "Harga bersahabat, sangat ramah untuk kantong mahasiswa maupun anggaran harian."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-santoey-sage" />,
      value: "10-35",
      label: "Kapasitas Nyaman",
      desc: "Ideal untuk belajar kelompok, kumpul organisasi, hingga rapat kerja divisi."
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6 text-santoey-sage" />,
      value: "13 Jam",
      label: "Buka Setiap Hari",
      desc: "Operasional 10:00 - 23:00 WIB, siap menemani produktivitas Anda dari siang hingga malam."
    },
    {
      id: 4,
      icon: <Coffee className="w-6 h-6 text-santoey-sage" />,
      value: "Rp 0",
      label: "Tanpa Biaya Sewa",
      desc: "Bekerja, belajar, dan berdiskusi sepuasnya tanpa khawatir biaya sewa meja per jam."
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
              Fasilitas Kelas Kafe,<br />
              <span className="text-santoey-lightbrown">Harga Warung Bersahabat.</span>
            </h2>
            <p className="text-santoey-brown/80 leading-relaxed text-lg">
              Kami memahami kebutuhan para pelajar, mahasiswa, dan profesional di Bandung: merindukan ruang produktif yang estetik dan tenang, colokan listrik melimpah, serta internet serat optik yang kencang—tanpa harus membayar mahal untuk secangkir kopi.
            </p>
            <p className="text-santoey-brown/80 leading-relaxed">
              <strong className="font-bold text-santoey-dark">Kedai Santoey</strong> hadir sebagai solusi dengan konsep <strong className="font-bold text-santoey-lightbrown">"Fasilitas Kafe, Harga Warung"</strong>. Visual bangunan semi-outdoor kami yang estetik alami menghadirkan kesegaran udara Bandung yang menenangkan. Didukung oleh pelayanan staf yang sangat hangat dan ramah layaknya sahabat sendiri, Kedai Santoey menjadi ruang kolaborasi terbaik untuk belajar mandiri, bekerja jarak jauh (WFC), hingga diskusi kelompok dengan tenang dan hemat.
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
                className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-santoey-sage/40 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-santoey-sage/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-santoey-sage/5">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-extrabold bg-gradient-to-br from-santoey-dark via-santoey-brown to-santoey-lightbrown bg-clip-text text-transparent tracking-tight">
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
