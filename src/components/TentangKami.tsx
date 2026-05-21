import { motion } from 'framer-motion';
import { Plug, Wifi, CircleDollarSign, Coffee } from 'lucide-react';

export default function TentangKami() {
  const stats = [
    {
      id: 1,
      icon: <Plug className="w-6 h-6 text-santoey-sage" />,
      value: "50+",
      label: "Colokan Listrik",
      desc: "Tersedia di setiap sudut meja kaki lima"
    },
    {
      id: 2,
      icon: <Wifi className="w-6 h-6 text-santoey-sage" />,
      value: "100 Mbps",
      label: "WiFi Dedicated",
      desc: "Koneksi serat optik stabil anti lemot"
    },
    {
      id: 3,
      icon: <CircleDollarSign className="w-6 h-6 text-santoey-sage" />,
      value: "Rp 0",
      label: "Biaya Sewa Meja",
      desc: "Nugas seharian sepuasnya tanpa diusir"
    },
    {
      id: 4,
      icon: <Coffee className="w-6 h-6 text-santoey-sage" />,
      value: "30+",
      label: "Varian Menu",
      desc: "Dari sop iga premium hingga indomie sachet"
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
              Kami tahu betul drama mahasiswa dan freelancer di Bandung: ingin tempat nugas yang estetik, 
              tenang, colokan melimpah, dan internetnya kencang—tapi dompet langsung menangis karena harga 
              kopi segelas seharga sekali makan sehari.
            </p>
            <p className="text-santoey-brown/80 leading-relaxed">
              **Kedai Santoey** didirikan sebagai solusi jalan tengah. Kami menghadirkan suasana nugas WFC 
              yang super kondusif dan fasilitas setara *co-working space* premium, namun tetap mempertahankan 
              kearifan lokal berupa harga menu yang bersahabat ala warungan. Di sini, Anda bisa fokus mengejar 
              impian secara produktif tanpa perlu khawatir isi kantong bolong.
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
