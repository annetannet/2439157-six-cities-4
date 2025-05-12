import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt, IsMongoId,
  IsNumber,
  IsObject,
  IsString, Length,
  MaxLength,
  MinLength
} from 'class-validator';
import { ConveniencesType } from '../../../types/amenity.enum.js';
import { CityType } from '../../../types/city.enum.js';
import { TypeHousing } from '../../../types/property-type.enum.js';
import { User } from '../../../types/user.js';
import { CreateOfferValidationMessage } from './create-messages.js';

export default class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.name.maxLength })
    name!: string;

  @MinLength(20, { message: CreateOfferValidationMessage.name.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.name.maxLength })
    description!: string;

  @IsDateString({}, {message: CreateOfferValidationMessage.date.invalidFormat})
    date!: Date;

  @IsString({message: CreateOfferValidationMessage.city.invalidFormat})
    city!: CityType;

  @IsString({message: CreateOfferValidationMessage.previewImg.invalidFormat})
    previewImg!: string;

  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
    images!: string[];

  @IsBoolean({message: CreateOfferValidationMessage.flagIsPremium.invalidFormat})
    flagIsPremium!: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.flagIsFavourites.invalidFormat})
    flagIsFavourites!: boolean;

  @IsNumber({}, {message: CreateOfferValidationMessage.rating.invalidFormat})
  @Length(1, 5, {message: CreateOfferValidationMessage.rating.lengthField})
    rating!: 1 | 2 | 3 | 4 | 5;

  @IsString({message: CreateOfferValidationMessage.typeHousing.invalidFormat})
    typeHousing!: TypeHousing;

  @IsInt({message: CreateOfferValidationMessage.countRooms.invalidFormat})
  @Length(1, 8, {message: CreateOfferValidationMessage.countRooms.lengthField})
    countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsInt({message: CreateOfferValidationMessage.countPeople.invalidFormat})
  @Length(1, 10, {message: CreateOfferValidationMessage.countPeople.lengthField})
    countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  @Length(100, 100000, {message: CreateOfferValidationMessage.price.lengthField})
    price!: number;

  @IsString({message: CreateOfferValidationMessage.conveniences.invalidFormat})
    conveniences!: ConveniencesType;

  @IsMongoId({ message: CreateOfferValidationMessage.author.invalidId })
    author!: User;

  countComments!: number;

  @IsObject({message:CreateOfferValidationMessage.coordinates.invalidFormat})
    coordinates!: string;
}

