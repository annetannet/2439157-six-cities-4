/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import typegoose, {defaultClasses, getModelForClass} from '@typegoose/typegoose';
import { ConveniencesType } from '../../types/amenity.enum.js';
import { CityType } from '../../types/city.enum.js';
import { CoordinatesType } from '../../types/coordinates.js';
import { TypeHousing } from '../../types/property-type.enum.js';
import { Offer } from '../../types/rental-offer.js';
import { User } from '../../types/user.js';
import { UserEntity } from '../user/user.entity.js';


const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {
}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps implements Offer {
  @prop({
    required: true,
    minlength: [10, 'Min length for name is 10'],
    maxlength: [100, 'Min length for name is 100']
  })
  public name!: string;

  @prop({
    required: true,
    minlength: [20, 'Min length for description is 20'],
    maxlength: [1024, 'Min length for description is 1024']
  })
  public description!: string;

  @prop({required: true})
  public date!: Date;

  @prop({
    required: true,
    type: () => String,
    enum: CityType
  })
  public city!: CityType;

  @prop({required: true})
  public previewImg!: string;

  @prop({
    required: true,
    type: () => String,
  })
  public images!: string[];

  @prop({required: true})
  public flagIsPremium!: boolean;

  @prop({required: true})
  public flagIsFavourites!: boolean;

  @prop({required: true})
  public rating!: 1 | 2 | 3 | 4 | 5;

  @prop({
    required: true,
    type: () => String,
    enum: TypeHousing
  })
  public typeHousing!: TypeHousing;

  @prop({required: true})
  public countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @prop({required: true})
  public countPeople!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @prop({
    required: true,
    min: [100, 'Min length for price is 100'],
    max: [100000, 'Max length for price is 100000'],
  })
  public price!: number;

  @prop({
    required: true,
    type: () => String,
    enum: ConveniencesType
  })
  public conveniences!: ConveniencesType;

  @prop({
    required: true,
    ref: UserEntity,
  })
  public author!: User;

  @prop({default: 0})
  public countComments!: number;

  @prop({
    required: true,
    type: () => String,
  })

  @prop({required: true})
  public coordinates!: CoordinatesType;

}

export const OfferModel = getModelForClass(OfferEntity);
