import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-rouen.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',

  // SEO: Force trailing slash sur toutes les URLs (y compris homepage)
  trailingSlash: true,
  
  // Optimisations pour build CapRover
  typescript: {
    ignoreBuildErrors: true, // Skip type-check en production (fait en dev)
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint en production (fait en dev)
  },  
  // Headers de sécurité gérés par middleware.js

  // Configuration de sécurité supplémentaire
  experimental: {
    serverComponentsExternalPackages: []
  },

  // Optimisations de sécurité
  compress: true,
  
  // Configuration des images (si utilisées)
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

  // Redirections 404 - URLs sans -rouen vers avec -rouen
  async redirects() {
    const existing = [
      // VAGUE 1 – Migration homepage domaine → page ville moverz.fr
      { source: '/', destination: 'https://moverz.fr/demenagement/rouen/', permanent: true },

      // Redirections historiques
      // SATELLITES : Articles sans -rouen → avec -rouen
      { source: '/blog/satellites/self-stockage-acces-24-7', destination: '/blog/satellites/self-stockage-acces-24-7-rouen', permanent: true },
      { source: '/blog/satellites/autorisation-stationnement-demenagement-mairie', destination: '/blog/satellites/autorisation-stationnement-demenagement-rouen-mairie', permanent: true },
      { source: '/blog/satellites/prix-demenageur-2025', destination: '/blog/satellites/prix-demenageur-rouen-2025', permanent: true },
      { source: '/blog/satellites/formules-demenagement-comparatif', destination: '/blog/satellites/formules-demenagement-rouen-comparatif', permanent: true },
      { source: '/blog/satellites/demenageur-pas-cher-economique', destination: '/blog/satellites/demenageur-pas-cher-rouen-economique', permanent: true },
      { source: '/blog/satellites/meilleurs-garde-meubles-avis', destination: '/blog/satellites/meilleurs-garde-meubles-rouen-avis', permanent: true },
      { source: '/blog/satellites/monte-meuble-demenagement-prix', destination: '/blog/satellites/monte-meuble-demenagement-rouen-prix', permanent: true },
      { source: '/blog/satellites/demenagement-longue-distance', destination: '/blog/satellites/demenagement-longue-distance-rouen', permanent: true },
      { source: '/blog/satellites/stockage-pendant-demenagement-duree', destination: '/blog/satellites/stockage-pendant-demenagement-duree-rouen', permanent: true },
      { source: '/blog/satellites/demenagement-etudiant-solutions', destination: '/blog/satellites/demenagement-etudiant-rouen-solutions', permanent: true },
      { source: '/blog/satellites/duree-minimum-garde-meuble', destination: '/blog/satellites/duree-minimum-garde-meuble-rouen', permanent: true },
      { source: '/blog/satellites/meilleurs-demenageurs-avis-2025', destination: '/blog/satellites/meilleurs-demenageurs-rouen-avis-2025', permanent: true },
      { source: '/blog/satellites/prix-garde-meuble-2025', destination: '/blog/satellites/prix-garde-meuble-rouen-2025', permanent: true },
      { source: '/blog/satellites/assurance-garde-meuble-obligatoire', destination: '/blog/satellites/assurance-garde-meuble-rouen-obligatoire', permanent: true },
      { source: '/blog/satellites/garde-meuble-pas-cher', destination: '/blog/satellites/garde-meuble-pas-cher-rouen', permanent: true },
      { source: '/blog/satellites/demenageur-centre-historique', destination: '/blog/satellites/demenageur-centre-historique-rouen', permanent: true },
      { source: '/blog/satellites/taille-box-stockage', destination: '/blog/satellites/taille-box-stockage-rouen', permanent: true },
      { source: '/blog/satellites/garde-meuble-etudiant', destination: '/blog/satellites/garde-meuble-etudiant-rouen', permanent: true },
      { source: '/blog/satellites/self-stockage-vs-garde-meuble-traditionnel', destination: '/blog/satellites/self-stockage-vs-garde-meuble-traditionnel-rouen', permanent: true },

      // PILIERS : Catégories sans -rouen → avec -rouen
      { source: '/blog/aide-demenagement/aide-demenagement-guide-complet', destination: '/blog/aide-demenagement-rouen/aide-demenagement-rouen-guide-complet', permanent: true },
      { source: '/blog/demenagement-international/demenagement-international-guide-complet', destination: '/blog/demenagement-international-rouen/demenagement-international-rouen-guide-complet', permanent: true },
      { source: '/blog/demenageur-pas-cher/demenageur-pas-cher-guide', destination: '/blog/demenageur-rouen-pas-cher/demenageur-rouen-pas-cher-guide', permanent: true },
      
      // ORDRE INCORRECT : demenageur-pas-cher-rouen → demenageur-rouen-pas-cher
      { source: '/blog/demenageur-pas-cher-rouen/:path*', destination: '/blog/demenageur-rouen-pas-cher/:path*', permanent: true },
      { source: '/blog/demenagement-entreprise/demenagement-entreprise-guide-complet', destination: '/blog/demenagement-entreprise-rouen/demenagement-entreprise-rouen-guide-complet', permanent: true },
      { source: '/blog/prix-demenagement/prix-demenagement-guide-complet', destination: '/blog/prix-demenagement-rouen/prix-demenagement-rouen-guide-complet', permanent: true },
      { source: '/blog/petit-demenagement/petit-demenagement-guide-complet', destination: '/blog/petit-demenagement-rouen/petit-demenagement-rouen-guide-complet', permanent: true },
      { source: '/blog/location-camion-demenagement/location-camion-demenagement-guide-complet', destination: '/blog/location-camion-demenagement-rouen/location-camion-demenagement-rouen-guide-complet', permanent: true },
      { source: '/blog/demenagement-piano/demenagement-piano-guide-complet', destination: '/blog/demenagement-piano-rouen/demenagement-piano-rouen-guide-complet', permanent: true },

      // ARTICLES dans mauvais dossier (demenagement-rouen/ → satellites/ ou piliers/)
      { source: '/blog/demenagement-rouen/demenageur-pas-cher', destination: '/blog/demenageur-pas-cher-rouen/demenageur-pas-cher-rouen-guide', permanent: true },
      { source: '/blog/demenagement-rouen/taille-box-stockage-rouen', destination: '/blog/demenagement-rouen/taille-box-stockage-rouen', permanent: true },
      { source: '/blog/demenagement-rouen/garde-meuble-etudiant-rouen', destination: '/blog/demenagement-rouen/garde-meuble-etudiant-rouen', permanent: true },
      { source: '/blog/demenagement-rouen/demenageur', destination: '/blog/demenagement-rouen/demenageur-rouen', permanent: true },
      { source: '/blog/demenagement-rouen/location-camion-demenagement', destination: '/blog/location-camion-demenagement-rouen/location-camion-demenagement-rouen-guide', permanent: true },

      // CATÉGORIES VIDES (rediriger vers page blog)
      { source: '/blog/international', destination: '/blog', permanent: true },

      // MAJUSCULES : Rouen → rouen
      { source: '/Rouen', destination: '/', permanent: true },
      { source: '/quartiers-Rouen', destination: '/quartiers-rouen', permanent: true },
      
      // SERVICES : Majuscules
      { source: '/services/demenagement-economique-Rouen', destination: '/services/demenagement-economique-rouen', permanent: true },
      { source: '/services/demenagement-premium-Rouen', destination: '/services/demenagement-premium-rouen', permanent: true },
      { source: '/services/demenagement-standard-Rouen', destination: '/services/demenagement-standard-rouen', permanent: true },

      // QUARTIERS BORDEAUX sur site Rouen (erreur indexation)
      { source: '/rouen/merignac', destination: '/quartiers-rouen', permanent: true },
      { source: '/rouen/pessac', destination: '/quartiers-rouen', permanent: true },
      { source: '/rouen/bastide', destination: '/quartiers-rouen', permanent: true },
      { source: '/devis-demenagement-rouen-saint-marc/', destination: '/rouen/saint-marc', permanent: true },
      { source: '/devis-demenagement-rouen-coteaux-sud/', destination: '/rouen/coteaux-sud', permanent: true },
      // ANCIENNES URLs

      // REDIRECTIONS inventaire-ia → devis-gratuits (20/01/2026)
      { source: '/inventaire-ia', destination: '/devis-gratuits/', permanent: true },
      { source: '/inventaire-ia/', destination: '/devis-gratuits/', permanent: true },
      { source: '/inventaire-ia/:path*', destination: '/devis-gratuits/:path*', permanent: true },
      { source: '/estimation-demenagement-rouen/', destination: '/estimation-rapide', permanent: true },
      { source: '/prix-demenagement-rouen/', destination: '/blog/prix-demenagement-rouen/prix-demenagement-rouen-guide-complet', permanent: true },
      { source: '/devis-demenagement-rouen/', destination: '/estimation-rapide', permanent: true },

      // CATÉGORIES BLOG VIDES → /blog (Fix CSV 30/10/2025)
      { source: '/blog/etudiant', destination: '/blog', permanent: true },
      { source: '/blog/urgent', destination: '/blog', permanent: true },
      { source: '/blog/devis', destination: '/blog', permanent: true },
      
      // FICHIERS BATCH/LISTE/PILIER supprimés → /blog (06/11/2025)
      // Redirections pour /blog/conseils/ ET /blog/satellites/ (au cas où)
      { source: '/blog/conseils/BATCH-PRODUCTION-ARTICLES-13-30', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PRODUCTION-ARTICLES-13-30', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PRODUCTION-ARTICLES-31-60', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PRODUCTION-ARTICLES-31-60', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PRODUCTION-ARTICLES-61-100-FINAL', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PRODUCTION-ARTICLES-61-100-FINAL', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PILIER-04-ARTICLES-04-10', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PILIER-04-ARTICLES-04-10', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PILIER-08-DEMENAGEUR-ROUEN', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PILIER-08-DEMENAGEUR-ROUEN', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PILIERS-06-07-COMPLET', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PILIERS-06-07-COMPLET', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PILIERS-01-09-10-COMPLET', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PILIERS-01-09-10-COMPLET', destination: '/blog', permanent: true },
      { source: '/blog/conseils/BATCH-PILIERS-03-02-05-FINAL', destination: '/blog', permanent: true },
      { source: '/blog/satellites/BATCH-PILIERS-03-02-05-FINAL', destination: '/blog', permanent: true },
      
      // LEADGEN-02: Redirections 404 prioritaires (Rouen - 06/11/2025)
      // Articles existent dans satellites/ → redirection vers satellites
      { source: '/blog/garde-meuble/garde-meuble-etudiant-rouen', destination: '/blog/satellites/garde-meuble-etudiant-rouen', permanent: true },
      { source: '/blog/garde-meuble/meilleurs-garde-meubles-rouen-avis', destination: '/blog/satellites/meilleurs-garde-meubles-rouen-avis', permanent: true },
      { source: '/blog/garde-meuble/taille-box-stockage-rouen', destination: '/blog/satellites/taille-box-stockage-rouen', permanent: true },
      { source: '/services/demenagement-standard-rouen', destination: '/services/', permanent: true },
      { source: '/blog/longue-distance', destination: '/blog', permanent: true },
      { source: '/blog/entreprise', destination: '/blog', permanent: true },
      { source: '/blog/garde-meuble', destination: '/blog', permanent: true },

      // LEADGEN-02: Redirection page services manquante (06/11/2025)
      { source: '/services/demenagement-standard-rouen', destination: '/services/', permanent: true },

      // ARTICLES GARDE-MEUBLE mal classés → satellites/ (Fix 04/11/2025)
      { source: '/blog/garde-meuble/meilleurs-garde-meubles-rouen-avis', destination: '/blog/satellites/meilleurs-garde-meubles-rouen-avis', permanent: true },
      { source: '/blog/garde-meuble/garde-meuble-etudiant-rouen', destination: '/blog/satellites/garde-meuble-etudiant-rouen', permanent: true },
      { source: '/blog/garde-meuble/taille-box-stockage-rouen', destination: '/blog/satellites/taille-box-stockage-rouen', permanent: true },

      // LEADGEN-02: Fichiers batch exposés → /blog/ (Rouen - 06/11/2025)
      { source: '/blog/satellites/BATCH-PRODUCTION-ARTICLES-13-30', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/BATCH-PILIERS-01-09-10-COMPLET', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/BATCH-PILIER-08-DEMENAGEUR-ROUEN', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/BATCH-PRODUCTION-ARTICLES-31-60', destination: '/blog/', permanent: true },
      // WILDCARDS CATCH-ALL (TASK-LEADGEN-02 - COMPLETS)
      { source: '/blog/garde-meuble/:slug*', destination: '/blog/garde-meuble-rouen/:slug*', permanent: true },
      { source: '/blog/pas-cher/:slug*', destination: '/blog/demenagement-pas-cher-rouen/:slug*', permanent: true },
      { source: '/blog/international/:slug*', destination: '/blog/demenagement-international-rouen/:slug*', permanent: true },
      { source: '/blog/piano/:slug*', destination: '/blog/demenagement-piano-rouen/:slug*', permanent: true },
      { source: '/blog/demenageur/:slug*', destination: '/blog/demenageur-rouen/:slug*', permanent: true },
      { source: '/blog/aide/:slug*', destination: '/blog/aide-demenagement-rouen/:slug*', permanent: true },
      { source: '/blog/demenagement/:slug*', destination: '/blog/demenagement-rouen/:slug*', permanent: true },
      { source: '/blog/prix/:slug*', destination: '/blog/prix-demenagement-rouen/:slug*', permanent: true },
      // Supprimé : redirection vers soi-même (source = destination) causait erreur GSC (TASK-060)
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;