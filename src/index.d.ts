declare module '*.png';
declare module '*.jpg';

interface Menu {
  id: number;
  title: string;
  route: string;
  imageUrl?: string;
}

interface Mushroom {
  id: number;
  name: string;
  scientificName?: string;
  imageUrl: string;
  description?: string;
  nutritionalValue?: TableRow[]; // For NutritionalValue screen
}

interface Disease {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
}

interface TableRow {
  name: string;
  value: string;
}
