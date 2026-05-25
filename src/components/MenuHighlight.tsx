import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const fullMenu = [
  // MAKANAN
  { id: 1, category: "Makanan", title: "Nasi Sop iga", price: "23K", image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Sop iga sapi hangat berkuah gurih kaya rempah khas Kedai Santoey, disajikan lengkap dengan nasi putih." },
  { id: 2, category: "Makanan", title: "Nasi Sop ceker", price: "18K", image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi putih hangat disajikan dengan sop ceker ayam gurih, empuk, dan hangat kaya rempah." },
  { id: 3, category: "Makanan", title: "Sate ayam Nasi/lontong", price: "20K", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Sate ayam bakar khas dengan siraman bumbu kacang gurih melimpah, disajikan dengan pilihan nasi atau lontong." },
  { id: 4, category: "Makanan", title: "Nasi daun jeruk ayam", price: "20K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi wangi daun jeruk yang sedap disajikan dengan ayam goreng bumbu spesial dan sambal." },
  { id: 5, category: "Makanan", title: "Nasi goreng telor", price: "18K", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi goreng bumbu tradisional dengan telur mata sapi/dadar khas Kedai Santoey." },
  { id: 6, category: "Makanan", title: "Nasi putih", price: "5K", image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Nasi putih hangat berkualitas tinggi." },

  // MIE
  { id: 7, category: "Mie", title: "Mie godog", price: "18K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Mie kuah khas Jawa yang kaya bumbu telur, kol, dan potongan cabai rawit." },
  { id: 8, category: "Mie", title: "Mie Tek Tek goreng", price: "18K", image: "/mie-tek-tek.png", desc: "Mie goreng basah wangi khas Kedai Santoey bertabur bawang goreng dan kerupuk." },
  { id: 9, category: "Mie", title: "Indomie goreng telor", price: "12K", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie goreng legendaris disajikan dengan telur matang/setengah matang dan sawi segar." },
  { id: 10, category: "Mie", title: "Indomie kuah bwng telor", price: "12K", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie kuah rasa kaldu ayam bawang hangat berlimpah sawi dan telur rebus lembut." },
  { id: 11, category: "Mie", title: "Indomie kuah soto telor", price: "12K", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Indomie kuah rasa soto dengan tambahan telur rebus lembut dan perasan jeruk nipis segar." },

  // CAMILAN
  { id: 12, category: "Camilan", title: "Baso tahu", price: "15K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Baso tahu kukus khas Bandung disiram bumbu kacang gurih pedas manis." },
  { id: 13, category: "Camilan", title: "Dimsum", price: "15K", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Dimsum ayam kukus hangat lembut disajikan dengan saus cocolan pedas." },
  { id: 14, category: "Camilan", title: "Cuankie Santoey", price: "16K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cuankie gurih hangat spesial Kedai Santoey isi siomay, tahu, dan bakso kuah kaldu murni." },
  { id: 15, category: "Camilan", title: "Kentang sosis goreng", price: "15K", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kentang goreng renyah dipadu potongan sosis goreng nikmat bertabur saus." },
  { id: 16, category: "Camilan", title: "Gorengan Per porsi", price: "10K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Satu porsi gorengan renyah hangat (tahu/tempe/bakwan) pas untuk teman ngopi." },
  { id: 17, category: "Camilan", title: "Risoles per porsi", price: "10K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Satu porsi risoles gurih isi sayur/ragout lembut hangat." },
  { id: 18, category: "Camilan", title: "Roti bakar", price: "10K", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Roti panggang cokelat/keju/mentega lezat untuk camilan santai." },
  { id: 19, category: "Camilan", title: "Pisang Keju Bakar", price: "10K", image: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Pisang bakar manis legit bertabur parutan keju melimpah dan siraman susu kental manis." },
  { id: 20, category: "Camilan", title: "Aneka cemilan", price: "2 - 12 K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Koleksi camilan ringan di rak kayu kasir mulai dari keripik hingga jajanan pasar." },

  // MAKANAN PENUTUP
  { id: 21, category: "Penutup", title: "Es krim potong", price: "10K", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Es krim jadul potong dengan aneka rasa manis nostalgia." },
  { id: 22, category: "Penutup", title: "Banana split", price: "15K", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Paduan pisang manis dengan tiga scoop es krim lembut dan saus cokelat." },

  // KOPI
  { id: 23, category: "Kopi", title: "Americano", price: "13K", image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Seduhan biji kopi arabika pilihan tanpa gula khas WFC, disajikan hangat/dingin." },
  { id: 24, category: "Kopi", title: "Latte", price: "18K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kombinasi espresso kental dengan susu steamed yang lembut berbusa halus." },
  { id: 25, category: "Kopi", title: "Capuccino", price: "18K", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kopi khas Italia dengan perbandingan pas susu, espresso, dan foam tebal." },
  { id: 26, category: "Kopi", title: "Mocca /coklat", price: "18K", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Paduan harmonis kopi espresso, susu segar, dan cokelat pekat." },
  { id: 27, category: "Kopi", title: "Aren", price: "18K", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kopi susu gula aren bestseller Kedai Santoey, perpaduan manis gurih yang pas." },
  { id: 28, category: "Kopi", title: "V Drip Coffee", price: "20K", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Kopi saring ala Vietnam dengan susu kental manis, bercita rasa pekat dan manis gurih." },
  { id: 29, category: "Kopi", title: "Aneka kopi seduh", price: "6K", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Aneka pilihan kopi sachet instan panas diseduh langsung." },

  // MINUMAN (TEH & JUICE)
  { id: 30, category: "Minuman", title: "Matcha", price: "15K", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Minuman teh hijau Jepang premium berpadu susu segar gurih." },
  { id: 31, category: "Minuman", title: "Thai Tea", price: "15K", image: "https://images.unsplash.com/photo-1483916174627-ae3c627f1901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Teh khas Thailand diseduh pekat dipadukan susu kental manis." },
  { id: 32, category: "Minuman", title: "Roasted Tea", price: "15K", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Hojicha / teh panggang aromatik beraroma smoky berpadu susu." },
  { id: 33, category: "Minuman", title: "Lemon Tea", price: "10K", image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Teh lemon segar asam manis menyegarkan tenggorokan." },
  { id: 34, category: "Minuman", title: "Sweet Tea", price: "7K", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Es teh manis klasik segar beraroma melati pelepas dahaga." },
  { id: 35, category: "Minuman", title: "Juice Jeruk", price: "10K", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus jeruk segar diperas murni, disajikan hangat atau dengan es batu." },
  { id: 36, category: "Minuman", title: "Juice alpukat", price: "13K", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus alpukat kental manis dengan topping kental manis cokelat." },
  { id: 37, category: "Minuman", title: "Juice jambu", price: "10K", image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus jambu biji merah segar kaya vitamin." },
  { id: 38, category: "Minuman", title: "Juice strawberry", price: "12K", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus stroberi segar asam manis menyegarkan." },
  { id: 39, category: "Minuman", title: "Juice mangga", price: "12K", image: "https://images.unsplash.com/photo-1553118249-0d858e97c595?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Jus mangga manis harum bertekstur kental segar buah pilihan." },
  { id: 40, category: "Minuman", title: "Es Sirup Cingcau", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Cincau hitam lembut disajikan dengan santan gurih, sirup wangi, dan es batu segar." },
];

const categories = ["Makanan", "Mie", "Camilan", "Kopi", "Minuman", "Penutup", "Paket Hemat"];

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
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <div className="space-y-1">
                        <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-santoey-sage bg-santoey-sage/10 px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-santoey-dark leading-tight">{item.title}</h3>
                      </div>
                      <span className="font-semibold text-santoey-sage whitespace-nowrap bg-santoey-sage/10 px-2.5 py-1 rounded-md text-sm">{item.price}</span>
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
