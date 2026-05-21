import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fullMenu = [
  // MAKANAN
  { id: 1, category: "Makanan", title: "Sop iga", price: "18K", image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Makanan", title: "Lontong kari ayam", price: "15K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Makanan", title: "Ns daun jeruk ayam", price: "20K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Makanan", title: "Nasi goreng telor", price: "17K", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Makanan", title: "Nasi putih", price: "5K", image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // MINUMAN
  { id: 6, category: "Minuman", title: "Kopi seduh sachet", price: "5K", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Minuman", title: "Jus Jeruk H/C", price: "10K", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Minuman", title: "Jus alpukat", price: "12K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 9, category: "Minuman", title: "Jus jambu", price: "10K", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 10, category: "Minuman", title: "Jus stroberi", price: "12K", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // MAKANAN PENUTUP
  { id: 11, category: "Penutup", title: "Roti bakar", price: "8K", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 12, category: "Penutup", title: "Es cincau", price: "10K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 13, category: "Penutup", title: "Es krim potong", price: "8K", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 14, category: "Penutup", title: "Aneka cemilan", price: "2-12K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // KOPI DAN TEH
  { id: 15, category: "Kopi & Teh", title: "Americano H/C", price: "10K", image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 16, category: "Kopi & Teh", title: "Latte", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 17, category: "Kopi & Teh", title: "Capuccino", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 18, category: "Kopi & Teh", title: "Mocca", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 19, category: "Kopi & Teh", title: "Aren", price: "15K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 20, category: "Kopi & Teh", title: "Thai tea", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 21, category: "Kopi & Teh", title: "Matcha", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 22, category: "Kopi & Teh", title: "Roasted tea", price: "12K", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // MIE
  { id: 23, category: "Mie", title: "Mie godog", price: "17K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 24, category: "Mie", title: "Mie Tek Tek goreng", price: "17K", image: "/mie-tek-tek.png" },
  { id: 25, category: "Mie", title: "Indomie goreng", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 26, category: "Mie", title: "Indomie kuah bawang", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 27, category: "Mie", title: "Indomie kuah soto", price: "10K", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // CAMILAN
  { id: 28, category: "Camilan", title: "Baso tahu", price: "15K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 29, category: "Camilan", title: "Dimsum", price: "15K", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 30, category: "Camilan", title: "Cuankie KS", price: "16K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 31, category: "Camilan", title: "Kentang sosis goreng", price: "12K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 32, category: "Camilan", title: "Gorengan paket", price: "6K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 33, category: "Camilan", title: "Risoles", price: "2,5K", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const categories = ["Makanan", "Mie", "Camilan", "Kopi & Teh", "Minuman", "Penutup"];

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
              Temukan berbagai hidangan lezat dan minuman segar dengan harga warungan yang dijamin bikin dompet santoey.
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredMenu.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/50 shadow-sm hover:shadow-xl transition-all group flex flex-col"
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
                  <div className="mt-auto">
                    <a 
                      href={getWhatsAppLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-2.5 rounded-full border-2 border-santoey-sage text-santoey-sage font-semibold hover:bg-santoey-sage hover:text-white transition-colors"
                    >
                      Pesan via WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
