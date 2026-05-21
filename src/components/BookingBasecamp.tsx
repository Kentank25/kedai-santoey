import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, ShieldCheck, MapPin, Coffee, Tag, Building } from 'lucide-react';

export default function BookingBasecamp() {
  const [orgName, setOrgName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [orgType, setOrgType] = useState('Himpunan / BEM');

  const getWhatsAppBookingLink = () => {
    const defaultText = `Halo admin Kedai Santoey, saya ingin melakukan reservasi tempat untuk berdiskusi/rapat.`;
    const detailText = `\n\nDetail Reservasi:\n- Nama Organisasi/Tim: ${orgName || '-'}\n- Kategori Kegiatan: ${orgType}\n- Estimasi Jumlah Peserta: ${peopleCount || '-'} orang\n- Rencana Tanggal: ${eventDate || '-'}\n\nMohon informasi ketersediaan tempatnya ya, terima kasih banyak!`;
    
    const fullText = encodeURIComponent(defaultText + detailText);
    return `https://wa.me/628139875672?text=${fullText}`;
  };

  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-santoey-sage" />,
      title: "Rp 0 Sewa Tempat",
      desc: "Tidak dikenakan biaya sewa meja atau area khusus. Cukup memesan menu makanan & minuman pilihan Anda."
    },
    {
      icon: <Users className="w-6 h-6 text-santoey-sage" />,
      title: "Kapasitas 10 - 35 Orang",
      desc: "Sangat pas dan kondusif untuk diskusi kelompok, kumpul panitia, hingga rapat kerja divisi."
    },
    {
      icon: <Coffee className="w-6 h-6 text-santoey-sage" />,
      title: "Suasana Homey & Hangat",
      desc: "Pelayanan ramah penuh kekeluargaan dari staf kami, membuat sesi diskusi kelompok terasa senyaman di rumah sendiri."
    },
    {
      icon: <MapPin className="w-6 h-6 text-santoey-sage" />,
      title: "Parkiran Luas & Aman",
      desc: "Area parkir memadai di dalam lokasi kedai, aman dan memberikan ketenangan penuh selama Anda berkumpul."
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
                Ruang Kolaborasi & Komunitas
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-santoey-dark leading-tight">
                Butuh Tempat Rapat atau Kolaborasi?<br />
                <span className="text-santoey-lightbrown">Kedai Santoey-kan Saja!</span>
              </h2>
              <p className="text-lg text-santoey-brown/80 leading-relaxed">
                Kami mendukung penuh berbagai aktivitas positif mahasiswa, komunitas kreatif, hingga tim profesional di Bandung. Nikmati kenyamanan ruang kolaborasi berkapasitas 10-35 orang dengan suasana hangat, tanpa ada beban biaya sewa tempat sama sekali.
              </p>
            </div>

            {/* Grid Benefit */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-santoey-sage/40 transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div className="w-12 h-12 bg-santoey-sage/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
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
                  Lengkapi formulir di bawah ini untuk membuat draf pesan booking WhatsApp secara instan.
                </p>
              </div>

              {/* Form Input */}
              <div className="space-y-4 text-left">
                
                {/* Jenis Organisasi */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Kategori Kegiatan / Komunitas</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-santoey-sage/75">
                      <Tag size={18} />
                    </div>
                    <select 
                      value={orgType}
                      onChange={(e) => setOrgType(e.target.value)}
                      className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl pl-11 pr-4 py-3 text-sm text-santoey-dark shadow-inner transition-all duration-200 focus:bg-white focus:border-santoey-sage focus:ring-4 focus:ring-santoey-sage/20 focus:outline-none cursor-pointer"
                    >
                      <option value="Himpunan / BEM">Himpunan Mahasiswa / BEM</option>
                      <option value="Unit Kegiatan Mahasiswa (UKM)">Unit Kegiatan Mahasiswa (UKM)</option>
                      <option value="Komunitas Kreatif / Sosial">Komunitas Kreatif / Sosial</option>
                      <option value="Tim Kerja / Proyek">Tim Kerja / Proyek</option>
                      <option value="Keluarga / Umum">Keluarga / Umum</option>
                    </select>
                  </div>
                </div>

                {/* Nama Organisasi */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Nama Organisasi / Tim</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-santoey-sage/75">
                      <Building size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Contoh: Himpunan Mahasiswa atau Tim Proyek Kreatif" 
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl pl-11 pr-4 py-3 text-sm text-santoey-dark shadow-inner placeholder-santoey-brown/40 transition-all duration-200 focus:bg-white focus:border-santoey-sage focus:ring-4 focus:ring-santoey-sage/20 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Jumlah Orang & Rencana Tanggal */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Jumlah Peserta</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-santoey-sage/75">
                        <Users size={18} />
                      </div>
                      <input 
                        type="number" 
                        placeholder="Contoh: 25" 
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(e.target.value)}
                        className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl pl-11 pr-4 py-3 text-sm text-santoey-dark shadow-inner placeholder-santoey-brown/40 transition-all duration-200 focus:bg-white focus:border-santoey-sage focus:ring-4 focus:ring-santoey-sage/20 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-santoey-dark tracking-wide uppercase">Rencana Tanggal</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-santoey-sage/75">
                        <Calendar size={18} />
                      </div>
                      <input 
                        type="date" 
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-white/80 border border-santoey-sage/30 rounded-2xl pl-11 pr-4 py-3 text-sm text-santoey-dark shadow-inner transition-all duration-200 focus:bg-white focus:border-santoey-sage focus:ring-4 focus:ring-santoey-sage/20 focus:outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* CTA Booking Button */}
              <a 
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-santoey-sage hover:bg-santoey-sage/90 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 transform active:scale-98 group text-sm"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ajukan Reservasi Tempat via WA
              </a>

              <p className="text-[11px] text-center text-santoey-brown/60">
                Pesan reservasi Anda akan dibuat secara otomatis. Anda dapat meninjau isi pesan sebelum dikirimkan ke WhatsApp kami.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
