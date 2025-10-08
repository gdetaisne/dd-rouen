import type { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Déménageurs rouen',
  defaultTitle: 'Déménageurs rouen - 5 devis sous 7 jours',
  description: '30 minutes pour votre dossier → 5 devis personnalisés sous 7 jours. Estimation volumétrique à partir de photos, tarifs clairs, conseils locaux.',
  canonical: 'https://www.rouen-demenageur.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.rouen-demenageur.fr',
    siteName: 'Déménageurs rouen',
    images: [
      {
        url: 'https://www.rouen-demenageur.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Déménageurs rouen - Devis IA',
      },
    ],
  },
  twitter: {
    handle: '@demenageursrouen',
    site: '@demenageursrouen',
    cardType: 'summary_large_image',
  },
};
