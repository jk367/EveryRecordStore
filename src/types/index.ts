export type Rating = 'red' | 'black' | 'gold' | 'diamond';

export interface RecordStore {
  id: string;
  name: string;
  slug: string;
  address: string;
  borough: 'Manhattan' | 'Brooklyn' | 'Queens' | 'Bronx' | 'Staten Island';
  coordinates: [number, number]; // [latitude, longitude]
  rating: Rating;
  specialties: string[];
  priceRange: string;
  description: string;
  reviewExcerpt: string;
  fullReview: string;
  imageUrl: string;
  hours: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  phone?: string;
  website?: string;
  instagram?: string;
} 