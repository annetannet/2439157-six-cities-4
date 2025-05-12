import { ConveniencesType } from '../types/amenity.enum.js';
import { CityType } from '../types/city.enum.js';
import { CoordinatesType } from '../types/coordinates.js';
import { TypeHousing } from '../types/property-type.enum.js';
import { Offer } from '../types/rental-offer.js';
import { User } from '../types/user.js';


export function createOffer(offerData: string): Offer {
  const [name, description, date, city, previewImg, images, flagIsPremium, flagIsFavourites, rating, typeHousing, countRooms, countPeople, price, conveniences, author, countComments, coordinates] = offerData.replace('\n', '').split('\t');
  return {
    name,
    description,
    date: new Date(date),
    city: city as CityType,
    previewImg,
    images: images.split(';'),
    flagIsPremium: flagIsPremium as unknown as boolean,
    flagIsFavourites: flagIsFavourites as unknown as boolean,
    rating: rating as unknown as 1 | 2 | 3 | 4 | 5,
    typeHousing: typeHousing as TypeHousing,
    countRooms: countRooms as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    countPeople: countPeople as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    price: Number.parseInt(price, 10),
    conveniences: conveniences as ConveniencesType,
    author: author as unknown as User,
    countComments: Number.parseInt(countComments, 10),
    coordinates: coordinates.split(',') as unknown as CoordinatesType
  } as Offer;
}
