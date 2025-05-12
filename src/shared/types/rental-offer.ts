import { ConveniencesType } from './amenity.enum.js';
import { CityType } from './city.enum.js';
import { CoordinatesType } from './coordinates.js';
import { TypeHousing } from './property-type.enum.js';
import { User } from './user.js';

export type Offer = {
  name: string;
  description: string;
  date: Date;
  city: CityType;
  previewImg: string;
  images: string[];
  flagIsPremium: boolean;
  flagIsFavourites: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  typeHousing: TypeHousing;
  countRooms: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  countPeople: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  price: number;
  conveniences: ConveniencesType;
  author: User;
  countComments: number;
  coordinates: CoordinatesType;
}
