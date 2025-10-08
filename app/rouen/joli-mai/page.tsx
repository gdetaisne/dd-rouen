import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à Joli-Mai (Rouen) | Devis gratuit & IA`,
  description: `Déménagement à Joli-Mai (Rouen). Quartier populaire de Rouen, logements sociaux et privés. Accès généralement facilité par les grandes rues. Accès: Boulevards larges, parkings disponibles, immeubles avec ascenseurs. Devis gratuit avec estimation IA.`,
  keywords: `déménagement Joli-Mai Rouen, déménageurs Rouen, devis déménagement Rouen, Boulevards larges, parkings disponibles, immeubles avec ascenseurs`,
};

const rouenJoliMaiData = {
  zone: "joli-mai",
  zoneDisplay: "Joli-Mai",
  description: `Quartier populaire de Rouen, logements sociaux et privés. Accès généralement facilité par les grandes rues.`,
  coverImage: "/images/quartiers/rouen/joli-mai.jpg",
  accessInfo: "Boulevards larges, parkings disponibles, immeubles avec ascenseurs",
  pricing: {
    studio: { min: 800, max: 1200 },
    t2: { min: 1200, max: 1800 },
    t3: { min: 1800, max: 2500 },
    t4: { min: 2500, max: 3500 },
    t5: { min: 3500, max: 4500 }
  },
  destinations: [
    { name: "Rouen intra-muros", slug: "rouen" },
    { name: "Paris", slug: "paris" },
    { name: "Lyon", slug: "lyon" },
    { name: "Toulouse", slug: "toulouse" },
    { name: "France entière", slug: "france" }
  ],
  partners: [
    {
      name: "Déménageur Rouen",
      rating: 4.8,
      reviews: 69,
      specialties: ["Déménagements locaux", "Gestion des contraintes d'accès"]
    },
    {
      name: "Alex Déménagement",
      rating: 4.7,
      reviews: 45,
      specialties: ["Déménagements express", "Emballage professionnel"]
    },
    {
      name: "SAM'DÉMÉNAGE",
      rating: 4.6,
      reviews: 28,
      specialties: ["Déménagements économiques", "Service personnalisé"]
    }
  ]
};

export default function RouenJoliMaiPage() {
  return <LocalPage {...rouenJoliMaiData} />;
}
