import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à Saint-Marc (Rouen) | Devis gratuit & IA`,
  description: `Déménagement à Saint-Marc (Rouen). Quartier résidentiel de Rouen, proche du centre et des transports. Mixité de logements anciens et récents. Accès: Rues normales, parkings de rue, mixité ancien/moderne. Devis gratuit avec estimation IA.`,
  keywords: `déménagement Saint-Marc Rouen, déménageurs Rouen, devis déménagement Rouen, Rues normales, parkings de rue, mixité ancien/moderne`,
};

const rouenSaintMarcData = {
  zone: "saint-marc",
  zoneDisplay: "Saint-Marc",
  description: `Quartier résidentiel de Rouen, proche du centre et des transports. Mixité de logements anciens et récents.`,
  coverImage: "/images/quartiers/rouen/saint-marc.jpg",
  accessInfo: "Rues normales, parkings de rue, mixité ancien/moderne",
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

export default function RouenSaintMarcPage() {
  return <LocalPage {...rouenSaintMarcData} />;
}
