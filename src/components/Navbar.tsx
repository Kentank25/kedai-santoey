import { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Basecamp', href: '#basecamp' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-santoey-cream/90 backdrop-blur-md border-b border-santoey-brown/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Coffee className="text-santoey-sage h-8 w-8" />
            <span className="font-bold text-2xl tracking-tight text-santoey-dark">
              Kedai Santoey
            </span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-santoey-brown hover:text-santoey-sage transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop "Pesan Sekarang" Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/628139875672" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-santoey-brown hover:bg-santoey-lightbrown text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Hamburger Menu Toggle Button (Mobile Only) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-santoey-brown hover:text-santoey-sage p-2 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-santoey-brown/10 bg-santoey-cream/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 text-santoey-brown hover:text-santoey-sage hover:bg-santoey-sage/10 rounded-2xl transition-all font-medium text-base"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full pt-4 border-t border-santoey-brown/10 flex justify-center">
                <a
                  href="https://wa.me/628139875672"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-santoey-brown hover:bg-santoey-lightbrown text-white py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
