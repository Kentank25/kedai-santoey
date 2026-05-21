import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const fullMenu = [
  // MAKANAN
  { id: 1, category: "Makanan", title: "Sop Iga Sapi", price: "18K", image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Sop iga sapi hangat berkuah gurih kaya rempah khas Kedai Santoey." },
  { id: 2, category: "Makanan", title: "Lontong Kari Ayam", price: "15K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kuah kari kental gurih disajikan dengan lontong lembut dan suwiran ayam melimpah." },
  { id: 3, category: "Makanan", title: "Nasi Daun Jeruk Ayam Goreng", price: "20K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi wangi daun jeruk yang sedap disajikan dengan ayam goreng bumbu spesial." },
  { id: 4, category: "Makanan", title: "Nasi Goreng Telur", price: "17K", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi goreng bumbu tradisional dengan telur mata sapi/dadar khas kaki lima." },
  { id: 5, category: "Makanan", title: "Nasi Putih", price: "5K", image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi putih hangat berkualitas tinggi." },

  // MINUMAN
  { id: 6, category: "Minuman", title: "Kopi Seduh Instan", price: "5K", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Aneka pilihan kopi sachet instan panas diseduh langsung." },
  { id: 7, category: "Minuman", title: "Jus Jeruk (Hangat/Dingin)", price: "10K", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus jeruk segar diperas murni, disajikan hangat atau dengan es batu." },
  { id: 8, category: "Minuman", title: "Jus Alpukat", price: "12K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus alpukat kental manis dengan topping kental manis cokelat." },
  { id: 9, category: "Minuman", title: "Jus Jambu", price: "10K", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus jambu biji merah segar kaya vitamin." },
  { id: 10, category: "Minuman", title: "Jus Stroberi", price: "12K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus stroberi segar asam manis menyegarkan tenggorokan." },

  // MAKANAN PENUTUP
  { id: 11, category: "Penutup", title: "Roti Bakar", price: "8K", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Roti panggang cokelat/keju/mentega lezat untuk camilan santai." },
  { id: 12, category: "Penutup", title: "Es Cincau", price: "10K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cincau hitam lembut disajikan dengan santan gurih dan gula merah." },
  { id: 13, category: "Penutup", title: "Es Krim Potong", price: "8K", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Es krim jadul potong dengan aneka rasa manis nostalgia." },
  { id: 14, category: "Penutup", title: "Aneka Cemilan", price: "2-12K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Koleksi camilan ringan di rak kayu kasir mulai dari keripik hingga jajanan pasar." },

  // KOPI DAN TEH
  { id: 15, category: "Kopi & Teh", title: "Americano (Hangat/Dingin)", price: "10K", image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Seduhan biji kopi arabika pilihan tanpa gula khas WFC." },
  { id: 16, category: "Kopi & Teh", title: "Latte", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kombinasi espresso kental dengan susu steamed yang lembut berbusa halus." },
  { id: 17, category: "Kopi & Teh", title: "Capuccino", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kopi khas Italia dengan perbandingan pas susu, espresso, dan foam." },
  { id: 18, category: "Kopi & Teh", title: "Mocca", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Paduan harmonis kopi espresso, susu, dan cokelat pekat." },
  { id: 19, category: "Kopi & Teh", title: "Aren", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kopi susu gula aren bestseller Kedai Santoey, perpaduan manis gurih yang pas." },
  { id: 20, category: "Kopi & Teh", title: "Thai Tea", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Teh khas Thailand diseduh pekat dipadukan susu kental manis." },
  { id: 21, category: "Kopi & Teh", title: "Matcha", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Minuman teh hijau Jepang premium berpadu susu segar gurih." },
  { id: 22, category: "Kopi & Teh", title: "Roasted Tea", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Hojicha / teh panggang aromatik beraroma smoky berpadu susu." },

  // MIE
  { id: 23, category: "Mie", title: "Mie Godog", price: "17K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Mie kuah khas Jawa yang kaya bumbu telur, kol, dan potongan cabai rawit." },
  { id: 24, category: "Mie", title: "Mie Tek-Tek Goreng", price: "17K", image: "/mie-tek-tek.png", desc: "Mie goreng basah wangi khas Kedai Santoey bertabur bawang goreng dan kerupuk." },
  { id: 25, category: "Mie", title: "Indomie Goreng", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie goreng legendaris disajikan dengan telur setengah matang." },
  { id: 26, category: "Mie", title: "Indomie Kuah Bawang", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie kuah rasa kaldu ayam bawang hangat berlimpah sawi." },
  { id: 27, category: "Mie", title: "Indomie Kuah Soto", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie kuah rasa soto dengan perasan jeruk nipis gurih segar." },

  // CAMILAN
  { id: 28, category: "Camilan", title: "Baso Tahu", price: "15K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Baso tahu kukus khas Bandung disiram bumbu kacang gurih pedas manis." },
  { id: 29, category: "Camilan", title: "Dimsum", price: "15K", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Dimsum ayam kukus hangat lembut disajikan dengan saus cocolan pedas." },
  { id: 30, category: "Camilan", title: "Cuankie Khas Santoey", price: "16K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cuankie gurih hangat spesial Kedai Santoey isi siomay, tahu, dan bakso." },
  { id: 31, category: "Camilan", title: "Kentang & Sosis Goreng", price: "12K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kentang goreng renyah dipadu potongan sosis goreng nikmat bertabur saus." },
  { id: 32, category: "Camilan", title: "Paket Gorengan Hangat", price: "6K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Paket gorengan tahu/tempe/bakwan hangat cocol sambal kecap." },
  { id: 33, category: "Camilan", title: "Risoles", price: "2,5K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Risoles gurih isi sayur/ragout per biji hangat." },
];

const categories = ["Makanan", "Mie", "Camilan", "Kopi & Teh", "Minuman", "Penutup", "Paket Hemat"];

export default function MenuHighlight() {
  const [activeTab, setActiveTab] = useState("Makanan");

  const filteredMenu = fullMenu.filter(item => item.category === activeTab);

  const getWhatsAppLink = (itemName: string) => {
    const text = encodeURIComponent(`Halo min, saya mau pesan ${itemName} dari web Kedai Santoey.`);
    return `https://wa.me/628139875672?text=${text}`;
  };

  return (
    <section id="menu" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark mb-4">
              Katalog Menu
            </h2>
            <p className="text-lg text-santoey-brown/70">
              Temukan berbagai hidangan lezat dan minuman segar berkualitas dengan harga warung yang sangat bersahabat.
            </p>
          </div>
        </motion.div>

        {/* Tab Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex overflow-x-auto hide-scrollbar gap-3 mb-10 pb-4 justify-start lg:justify-center px-4 -mx-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-all ${
                activeTab === cat 
                  ? "bg-santoey-brown text-white shadow-md scale-105" 
                  : "bg-white/50 backdrop-blur-md text-santoey-brown/80 hover:bg-white/80 border border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`w-full ${filteredMenu.length === 0 ? '' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'}`}
          >
            {filteredMenu.length === 0 ? (
              <div className="py-16 px-6 text-center bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm max-w-xl mx-auto space-y-5">
                <span className="text-5xl block animate-pulse">🍱</span>
                <h3 className="text-2xl font-bold text-santoey-dark font-serif">Segera Hadir!</h3>
                <p className="text-base text-santoey-brown/70 leading-relaxed max-w-md mx-auto">
                  Menu Paket Hemat Kelompok & Organisasi sedang kami persiapkan khusus untuk sesi belajar & kolaborasi kelompok yang lebih hemat. Nantikan kehadirannya segera!
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-santoey-sage/10 text-santoey-sage border border-santoey-sage/20">
                    Stay Tuned
                  </span>
                </div>
              </div>
            ) : (
              filteredMenu.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-santoey-sage/40 transition-all duration-300 group flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-santoey-brown/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <h3 className="text-lg font-bold text-santoey-dark leading-tight">{item.title}</h3>
                      <span className="font-semibold text-santoey-sage whitespace-nowrap bg-santoey-sage/10 px-2 py-1 rounded-md">{item.price}</span>
                    </div>
                    {/* Deskripsi menu / rincian paket hemat */}
                    {'desc' in item && item.desc && (
                      <p className="text-sm text-santoey-brown/70 leading-relaxed mb-6 flex-grow">
                        {item.desc}
                      </p>
                    )}
                    <div className="mt-auto">
                      <a 
                        href={getWhatsAppLink(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-full border-2 border-santoey-sage text-santoey-sage font-semibold hover:bg-santoey-sage hover:text-white hover:shadow-lg hover:shadow-santoey-sage/15 active:scale-98 transition-all duration-300 flex items-center justify-center gap-1.5 text-sm"
                      >
                        <MessageSquare size={16} /> Pesan via WA
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
