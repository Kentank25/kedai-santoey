import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    category: "Semi-Outdoor Space",
    title: "Area Kerja Semi-Outdoor",
    desc: "Sudut kerja semi-outdoor berkonsep ruang terbuka yang sejuk dan teduh dengan hembusan angin alami kota Bandung. Meja kayu estetik nan luas, didukung pencahayaan alami yang ideal serta stop kontak lengkap di setiap sudut, didesain agar Anda tetap produktif dalam suasana santai yang asri.",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFJrk7ar7OX_y6MSfaTxfvVurabhMaHeOgJf58XWJ5ZSi7pUCEJEXbsJ5UiGWVjEraGaoyKJ9Xil8tF4snsD1TZoUizwHIRsbgWYs8reEByu_9AzcKjra8IfSFQYpq-j6nu1ix--9XhkjTt=s680-w680-h510-rw"
  },
  {
    id: 2,
    category: "Infrastruktur Produktif",
    title: "Stop Kontak Ganda di Tiap Sudut",
    desc: "Kenyamanan kerja dan belajar Anda adalah prioritas utama kami. Stop kontak ganda berkualitas tinggi terpasang kokoh di dekat area meja beton. Anda bebas mengisi daya laptop, tablet, dan gawai sekaligus tanpa khawatir kehabisan daya.",
    url: "/colokan-listrik.png"
  },
  {
    id: 3,
    category: "Outdoor Area",
    title: "Suasana Tenang Outdoor Malam Hari",
    desc: "Area luar ruangan berkerikil di bawah naungan pohon rindang berhias gemerlap lampu kuning gantung yang hangat. Area yang ideal untuk menikmati udara malam Bandung yang sejuk sambil berdiskusi santai atau melepas penat setelah seharian beraktivitas.",
    url: "/outdoor-malam.png"
  },
  {
    id: 4,
    category: "Area Kasir & Layanan",
    title: "Pojok Kasir & Jajanan Tradisional",
    desc: "Lokasi pemesanan utama dengan konsep jendela terbuka yang praktis dan higienis. Tepat di samping area barista, tersedia rak kayu estetik berisi aneka pilihan camilan ringan manis dan gurih dengan harga sangat bersahabat mulai dari 2 ribu rupiah saja.",
    url: "/kasir-counter.png"
  },
  {
    id: 5,
    category: "Menu Kuliner",
    title: "Hidangan Lezat Mengenyangkan",
    desc: "Kami menyajikan aneka hidangan hangat lezat porsi mengenyangkan sebagai penambah energi aktivitas, seperti Mie Tek-Tek khas Kedai Santoey, Sop Iga Sapi premium, hingga Lontong Kari gurih dengan banderol harga sangat bersahabat bagi mahasiswa maupun kalangan umum.",
    url: "/mie-tek-tek.png"
  },
  {
    id: 6,
    category: "Koneksi Cepat",
    title: "WiFi Fiber Optik Dedicated",
    desc: "Koneksi internet serat optik berkecepatan tinggi yang stabil, membebaskan Anda dari hambatan saat melakukan rapat video conference, mengunggah dokumen pekerjaan besar, maupun menyelesaikan tugas akademik dari seluruh area kedai.",
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function GaleriSpace() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation logic
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') {
      setSelectedIndex(null);
    } else if (e.key === 'ArrowRight') {
      setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowLeft') {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
    }
  }, [selectedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Disable scroll on body & hide navbar when Lightbox is open
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    };
  }, [selectedIndex, handleKeyDown]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="galeri" className="py-24 relative z-10 bg-mesh-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-santoey-sage font-bold tracking-widest uppercase text-sm">
            Eksplorasi Ruang
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark mt-2 mb-4">
            Tur Suasana Asli Kedai
          </h2>
          <p className="text-lg text-santoey-brown/70">
            Intip sudut-sudut ternyaman WFC kami. Foto-foto asli ini diambil langsung dari ulasan Google Maps Kedai Santoey.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((img, index) => (
            <div 
              key={img.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[320px] relative"
            >
              <div className="relative flex-grow overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  loading="lazy"
                />
                {/* Overlay Zoom on Hover */}
                <div className="absolute inset-0 bg-santoey-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-santoey-dark px-4 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={18} /> Perbesar Foto
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-santoey-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {img.category}
                </div>
              </div>
              <div className="p-5 bg-white/70">
                <h3 className="text-base font-bold text-santoey-dark group-hover:text-santoey-lightbrown transition-colors">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Custom Lightbox Overlay */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 z-[100] bg-santoey-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Tutup Galeri"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight size={28} />
              </button>

              {/* Lightbox Container */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full bg-santoey-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              >
                {/* Image Area */}
                <div className="w-full md:w-3/5 h-[300px] md:h-[500px] bg-black/40 flex items-center justify-center overflow-hidden">
                  <img 
                    src={galleryImages[selectedIndex].url} 
                    alt={galleryImages[selectedIndex].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info Area */}
                <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center text-left bg-santoey-dark text-white space-y-4">
                  <span className="text-santoey-sage font-bold tracking-widest uppercase text-xs">
                    {galleryImages[selectedIndex].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                    {galleryImages[selectedIndex].title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {galleryImages[selectedIndex].desc}
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center text-xs text-white/40 justify-between">
                    <span>Gunakan Tombol Arah Keyboard</span>
                    <span>{selectedIndex + 1} dari {galleryImages.length}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
