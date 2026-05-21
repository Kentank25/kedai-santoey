import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, ShieldCheck, MapPin, Coffee } from 'lucide-react';

export default function BookingBasecamp() {
  const [orgName, setOrgName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [orgType, setOrgType] = useState('Himpunan / BEM');

  const getWhatsAppBookingLink = () => {
    const defaultText = `Halo admin Kedai Santoey, saya ingin reservasi tempat untuk kumpul/rapat.`;
    const detailText = `\n\nDetail Reservasi:\n- Nama Organisasi: ${orgName || '-'}\n- Jenis: ${orgType}\n- Estimasi Jumlah: ${peopleCount || '-'} orang\n- Rencana Tanggal: ${eventDate || '-'}\n\nMohon info ketersediaan tempat ya min, nuhun!`;
    
    const fullText = encodeURIComponent(defaultText + detailText);
    return `https://wa.me/628139875672?text=${fullText}`;
  };

  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-santoey-sage" />,
      title: "Rp 0 Sewa Tempat",
      desc: "Tidak ada biaya sewa ruangan atau meja. Cukup pesan menu makanan/minuman seikhlasnya."
    },
    {
      icon: <Users className="w-6 h-6 text-santoey-sage" />,
      title: "Kapasitas 10 - 35 Orang",
      desc: "Sangat pas dan kondusif untuk belajar kelompok, kumpul panitia, atau rapat divisi kecil."
    },
    {
      icon: <Coffee className="w-6 h-6 text-santoey-sage" />,
      title: "Suasana Homey & Akrab",
      desc: "Pelayanan kekeluargaan dari staf kami yang sangat ramah, bikin sesi kumpul terasa seperti di rumah sendiri."
    },
    {
      icon: <MapPin className="w-6 h-6 text-santoey-sage" />,
      title: "Parkiran Luas & Aman",
      desc: "Area parkir motor yang luas di dalam lokasi kedai, aman tanpa drama menghalangi jalan utama."
    }
  ];

  return (
    <section id="basecamp" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Kolom Kiri: Informasi Benefit Basecamp */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-santoey-sage font-bold tracking-widest uppercase text-sm">
                Basecamp Komunitas
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark leading-tight">
                Cari Tempat Rapat Organisasi?<br />
                <span className="text-santoey-lightbrown">Kedai Santoey-kan Saja!</span>
              </h2>
              <p className="text-lg text-santoey-brown/80 leading-relaxed">
                Kami sangat mendukung pergerakan mahasiswa dan komunitas lokal di Bandung. Dapatkan kenyamanan kumpul belajar kelompok atau rapat divisi kecil berkapasitas 10-35 orang dengan suasana hangat tanpa biaya sewa tempat sama sekali.
              </p>
            </div>

            {/* Grid Benefit */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-default"
                >
                  <div className="w-12 h-12 bg-santoey-sage/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-santoey-dark text-base mb-1">{benefit.title}</h4>
                    <p className="text-xs text-santoey-brown/70 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kolom Kanan: Form Generator Booking via WA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/60 backdrop-blur-lg p-8 sm:p-10 rounded-[36px] border border-white/80 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-santoey-sage/10 rounded-bl-full pointer-events-none" />
              
              <div className="text-left space-y-2">
                <h3 className="text-2xl font-serif font-bold text-santoey-dark">Reservasi Basecamp</h3>
                <p className="text-sm text-santoey-brown/70">
                  Isi form berikut untuk membuat draf pesan booking WhatsApp secara instan.
                </p>
              </div>

              {/* Form Input */}
              <div className="space-y-4 text-left">
                
                {/* Jenis Organisasi */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Jenis Organisasi</label>
                  <select 
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-santoey-sage/50 text-santoey-dark shadow-inner transition-all cursor-pointer"
                  >
                    <option value="Himpunan / BEM">Himpunan Mahasiswa / BEM</option>
                    <option value="Unit Kegiatan Mahasiswa (UKM)">Unit Kegiatan Mahasiswa (UKM)</option>
                    <option value="Komunitas Hobi / Sosial">Komunitas Hobi / Sosial</option>
                    <option value="Tim Tugas / Project">Tim Tugas / Project Kuliah</option>
                    <option value="Keluarga / Umum">Keluarga / Umum</option>
                  </select>
                </div>

                {/* Nama Organisasi */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Nama Organisasi / Komunitas</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: HIMA IF Unisba" 
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-santoey-sage/50 text-santoey-dark shadow-inner placeholder-santoey-brown/40"
                  />
                </div>

                {/* Jumlah Orang & Rencana Tanggal */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Jumlah Orang</label>
                    <input 
                      type="number" 
                      placeholder="Contoh: 30" 
                      value={peopleCount}
                      onChange={(e) => setPeopleCount(e.target.value)}
                      className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-santoey-sage/50 text-santoey-dark shadow-inner placeholder-santoey-brown/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Rencana Tanggal</label>
                    <input 
                      type="date" 
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-santoey-sage/50 text-santoey-dark shadow-inner transition-all cursor-pointer"
                    />
                  </div>
                </div>

              </div>

              {/* CTA Booking Button */}
              <a 
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-santoey-sage hover:bg-santoey-sage/90 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 group text-sm"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Kirim Booking ke WhatsApp
              </a>

              <p className="text-[11px] text-center text-santoey-brown/60">
                Pesan akan diformat otomatis. Anda dapat meninjau pesan sebelum dikirim di WhatsApp.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
