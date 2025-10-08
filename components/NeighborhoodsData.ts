export type Item = { slug: string; title: string };

export const QUARTIERS: Item[] = [
  { slug: "centre-ville",      title: "Centre-ville" },
  { slug: "saint-marc",      title: "Saint-Marc" },
  { slug: "joli-mai",      title: "Joli-Mai" },
  { slug: "coteaux-sud",      title: "Coteaux-Sud" },
  { slug: "saint-sever",      title: "Saint-Sever" },
  { slug: "rive-droite",      title: "Rive-Droite" },
  { slug: "rive-gauche",      title: "Rive-Gauche" },
  { slug: "mont-saint-aignan",      title: "Mont-Saint-Aignan" },
  { slug: "bois-guillaume",      title: "Bois-Guillaume" },
  { slug: "bihorel",     title: "Bihorel" },
];

export const COMMUNES: Item[] = [
  { slug: "mont-saint-aignan",       title: "Mont-Saint-Aignan" },
  { slug: "bois-guillaume",       title: "Bois-Guillaume" },
  { slug: "bihorel",       title: "Bihorel" },
  { slug: "deville-les-rouen",       title: "Déville-lès-Rouen" },
  { slug: "grand-quevilly",       title: "Le Grand-Quevilly" },
];

export function urlForQuartier(slug: string) {
  return `/devis-demenagement-Rouen-${slug}/`;
}
export function urlForCommune(slug: string) {
  return `/devis-demenagement-${slug}/`;
}
