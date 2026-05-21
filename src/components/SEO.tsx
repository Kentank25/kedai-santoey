import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Kedai Santoey | Nugas Produktif, Dompet Tetap Santoey</title>
      <meta name="title" content="Kedai Santoey | Nugas Produktif, Dompet Tetap Santoey" />
      <meta name="description" content="Tempat nugas paling pewe di Bandung. Kedai Santoey menawarkan fasilitas kafe dengan harga warungan. WiFi kencang, colokan melimpah, dan suasana tenang." />
      <meta name="keywords" content="kafe nugas bandung, cafe murah bandung, wfc bandung, kedai santoey, tempat nugas pewe" />
      <meta name="author" content="Kedai Santoey" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kedaisantoey.com/" />
      <meta property="og:title" content="Kedai Santoey | Nugas Produktif, Dompet Tetap Santoey" />
      <meta property="og:description" content="Fasilitas kafe, harga warung. Tempat paling pewe buat kelarin tugas tanpa bikin kantong bolong." />
      <meta property="og:image" content="https://kedaisantoey.com/neon-box.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kedaisantoey.com/" />
      <meta property="twitter:title" content="Kedai Santoey | Nugas Produktif, Dompet Tetap Santoey" />
      <meta property="twitter:description" content="Fasilitas kafe, harga warung. Tempat paling pewe buat kelarin tugas tanpa bikin kantong bolong." />
      <meta property="twitter:image" content="https://kedaisantoey.com/neon-box.png" />
    </Helmet>
  );
}
