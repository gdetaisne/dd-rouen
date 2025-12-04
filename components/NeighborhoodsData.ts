export type Item = { slug: string; title: string };

export const QUARTIERS: Item[] = [
  { slug: "centre-ville",      title: "Centre-ville" },
  { slug: "saint-marc",      title: "Saint-Marc" },
  { slug: "joli-mai",      title: "Joli-Mai" },
  { slug: "coteaux-sud",      title: "Coteaux-Sud" },
  { slug: "saint-sever",      title: "Saint-Sever" },
];

export const COMMUNES: Item[] = [];
// Communes satellites à créer ultérieurement

export function urlForQuartier(slug: string) {
  return `/rouen/${slug}/`;
}
export function urlForCommune(slug: string) {
  return `/devis-demenagement-${slug}/`;
}
