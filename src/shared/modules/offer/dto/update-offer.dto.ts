import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber, IsObject, IsOptional,
  IsString, Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { ConveniencesType } from '../../../types/amenity.enum.js';
import { CityType } from '../../../types/city.enum.js';
import { CoordinatesType } from '../../../types/coordinates.js';
import { TypeHousing } from '../../../types/property-type.enum.js';
import { User } from '../../../types/user.js';
import { CreateOfferValidationMessage } from './create-messages.js';

export default class UpdateOfferDto{
  @IsOptional()
  @MinLength(10, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.name.maxLength })
    name?: string;

  @IsOptional()
  @MinLength(20, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.name.maxLength })
    description?: string;

  @IsOptional()
  @IsDateString({}, {message: CreateOfferValidationMessage.date.invalidFormat})
    date?: Date;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.city.invalidFormat})
    city?: CityType;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.previewImg.invalidFormat})
    previewImg?: string;

  @IsOptional()
  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
    images?: string[];

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.flagIsPremium.invalidFormat})
    flagIsPremium!: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.flagIsFavourites.invalidFormat})
    flagIsFavourites?: boolean;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.rating.invalidFormat})
  @Length(1, 5, {message: CreateOfferValidationMessage.rating.lengthField})
    rating?: 1 | 2 | 3 | 4 | 5;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.typeHousing.invalidFormat})
    typeHousing?: TypeHousing;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.countRooms.invalidFormat})
  @Length(1, 8, {message: CreateOfferValidationMessage.countRooms.lengthField})
    countRooms?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.countPeople.invalidFormat})
  @Length(1, 10, {message: CreateOfferValidationMessage.countPeople.lengthField})
    countPeople?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  @Length(100, 100000, {message: CreateOfferValidationMessage.price.lengthField})
    price?: number;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.conveniences.invalidFormat})
    conveniences?: ConveniencesType;

  @IsOptional()
  @IsMongoId({ message: CreateOfferValidationMessage.author.invalidId })
    author?: User;

  @IsOptional()
    countComments?: number;

  @IsOptional()
  @IsObject({message:CreateOfferValidationMessage.coordinates.invalidFormat})
    coordinates?: CoordinatesType;
}

