import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Kedai Santoey | Ruang Belajar, Kerja & Kolaborasi Nyaman di Bandung</title>
      <meta name="title" content="Kedai Santoey | Ruang Belajar, Kerja & Kolaborasi Nyaman di Bandung" />
      <meta name="description" content="Tempat kerja (WFC) dan belajar kelompok ternyaman di Bandung. Kedai Santoey menawarkan fasilitas standar kafe lengkap dengan harga warung yang sangat bersahabat. WiFi cepat, colokan melimpah, dan suasana semi-outdoor sejuk." />
      <meta name="keywords" content="kafe nugas bandung, cafe murah bandung, wfc bandung, kedai santoey, tempat nugas nyaman, sewa ruang rapat bandung, tempat wfc bandung" />
      <meta name="author" content="Kedai Santoey" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kedaisantoey.com/" />
      <meta property="og:title" content="Kedai Santoey | Ruang Belajar, Kerja & Kolaborasi Nyaman di Bandung" />
      <meta property="og:description" content="Fasilitas kafe lengkap dengan harga warung bersahabat. Ruang produktif ternyaman untuk belajar, bekerja, dan rapat komunitas tanpa khawatir anggaran membengkak." />
      <meta property="og:image" content="https://kedaisantoey.com/neon-box.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kedaisantoey.com/" />
      <meta property="twitter:title" content="Kedai Santoey | Ruang Belajar, Kerja & Kolaborasi Nyaman di Bandung" />
      <meta property="twitter:description" content="Fasilitas kafe lengkap dengan harga warung bersahabat. Ruang produktif ternyaman untuk belajar, bekerja, dan rapat komunitas tanpa khawatir anggaran membengkak." />
      <meta property="twitter:image" content="https://kedaisantoey.com/neon-box.png" />
    </Helmet>
  );
}
