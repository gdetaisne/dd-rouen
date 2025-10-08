import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à Coteaux-Sud (Rouen) | Devis gratuit & IA`,
  description: `Déménagement à Coteaux-Sud (Rouen). Quartier résidentiel sur les hauteurs de Rouen, vue sur la Seine. Maisons individuelles et petits immeubles. Accès: Rues en pente, parkings privés, maisons individuelles. Devis gratuit avec estimation IA.`,
  keywords: `déménagement Coteaux-Sud Rouen, déménageurs Rouen, devis déménagement Rouen, Rues en pente, parkings privés, maisons individuelles`,
};

const rouenCoteauxSudData = {
  zone: "coteaux-sud",
  zoneDisplay: "Coteaux-Sud",
  description: `Quartier résidentiel sur les hauteurs de Rouen, vue sur la Seine. Maisons individuelles et petits immeubles.`,
  coverImage: "/images/quartiers/rouen/coteaux-sud.jpg",
  accessInfo: "Rues en pente, parkings privés, maisons individuelles",
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

export default function RouenCoteauxSudPage() {
  return <LocalPage {...rouenCoteauxSudData} />;
}
