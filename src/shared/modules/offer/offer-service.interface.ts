import {DocumentType} from '@typegoose/typegoose';
import CreateOfferDto from './dto/create-offer.dto.js';
import { OfferEntity } from './offer.entity.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { ExistingDocument } from '../../types/existing-document.interface.js';

export interface OfferServiceInterface extends ExistingDocument {
    create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
    findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    find(): Promise<DocumentType<OfferEntity>[]>;
    deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
    getDetailsInfo(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    getPremium(): Promise<DocumentType<OfferEntity>[]>;
    calculateRating(rating: number, newRating: number, countRating:number, offerId:string): Promise<void>;
    exists(documentId: string): Promise<boolean>;
}
