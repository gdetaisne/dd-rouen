import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-rouen.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      { source: '/', destination: 'https://moverz.fr/demenagement/rouen/', permanent: true },
      // Blog hub → moverz.fr
      { source: '/blog', destination: 'https://moverz.fr/blog/', permanent: true },
      { source: '/blog/', destination: 'https://moverz.fr/blog/', permanent: true },
      // Blog articles → moverz.fr
      { source: '/blog/demenagement-rouen/:slug*', destination: 'https://moverz.fr/blog/:slug*', permanent: true },
      // Quartiers rouen (6 pages)
      { source: '/rouen/', destination: 'https://moverz.fr/rouen/', permanent: true },
      { source: '/rouen/centre-ville/', destination: 'https://moverz.fr/rouen/centre-ville/', permanent: true },
      { source: '/rouen/coteaux-sud/', destination: 'https://moverz.fr/rouen/coteaux-sud/', permanent: true },
      { source: '/rouen/joli-mai/', destination: 'https://moverz.fr/rouen/joli-mai/', permanent: true },
      { source: '/rouen/saint-marc/', destination: 'https://moverz.fr/rouen/saint-marc/', permanent: true },
      { source: '/rouen/saint-sever/', destination: 'https://moverz.fr/rouen/saint-sever/', permanent: true },
      // Hub quartiers rouen
      { source: '/quartiers-rouen/', destination: 'https://moverz.fr/quartiers-rouen/', permanent: true },
      // Corridors depuis rouen (6 pages)
      { source: '/rouen-vers-espagne/', destination: 'https://moverz.fr/rouen-vers-espagne/', permanent: true },
      { source: '/rouen-vers-lyon/', destination: 'https://moverz.fr/rouen-vers-lyon/', permanent: true },
      { source: '/rouen-vers-marseille/', destination: 'https://moverz.fr/rouen-vers-marseille/', permanent: true },
      { source: '/rouen-vers-nantes/', destination: 'https://moverz.fr/rouen-vers-nantes/', permanent: true },
      { source: '/rouen-vers-paris/', destination: 'https://moverz.fr/rouen-vers-paris/', permanent: true },
      { source: '/rouen-vers-toulouse/', destination: 'https://moverz.fr/rouen-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-rouen/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-rouen/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-rouen/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

          // Fix liens cassés (trailing slash + cross-city)
      // Trailing slash: /a-propos
      { source: '/a-propos', destination: '/a-propos/', permanent: true },
      // Trailing slash: /pro
      { source: '/pro', destination: '/pro/', permanent: true },
      // Trailing slash: /villes
      { source: '/villes', destination: '/villes/', permanent: true },
      // Trailing slash: /partenaires
      { source: '/partenaires', destination: '/partenaires/', permanent: true },
      // Trailing slash: /devis-gratuits
      { source: '/devis-gratuits', destination: '/devis-gratuits/', permanent: true },
      // Trailing slash: /choisir-ville
      { source: '/choisir-ville', destination: '/choisir-ville/', permanent: true },
      // Trailing slash: /contact
      { source: '/contact', destination: '/contact/', permanent: true },
      { source: '/demenagement/nice', destination: 'https://moverz.fr/demenagement/nice/', permanent: true },
      { source: '/demenagement/lyon', destination: 'https://moverz.fr/demenagement/lyon/', permanent: true },
      { source: '/demenagement/marseille', destination: 'https://moverz.fr/demenagement/marseille/', permanent: true },
      { source: '/demenagement/toulouse', destination: 'https://moverz.fr/demenagement/toulouse/', permanent: true },
      { source: '/demenagement/bordeaux', destination: 'https://moverz.fr/demenagement/bordeaux/', permanent: true },
      { source: '/demenagement/lille', destination: 'https://moverz.fr/demenagement/lille/', permanent: true },
      { source: '/demenagement/strasbourg', destination: 'https://moverz.fr/demenagement/strasbourg/', permanent: true },
      { source: '/demenagement/nantes', destination: 'https://moverz.fr/demenagement/nantes/', permanent: true },
      { source: '/demenagement/rennes', destination: 'https://moverz.fr/demenagement/rennes/', permanent: true },
      { source: '/demenagement/montpellier', destination: 'https://moverz.fr/demenagement/montpellier/', permanent: true },
      { source: '/demenagement/paris', destination: 'https://moverz.fr/demenagement/paris/', permanent: true },
      { source: '/demenagement/grenoble', destination: 'https://moverz.fr/demenagement/grenoble/', permanent: true },

      return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
