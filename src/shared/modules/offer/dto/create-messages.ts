export const CreateOfferValidationMessage = {
  author: {
    invalidId: 'userId must be a valid identifier',
  },
  city: {
    invalidFormat: 'City must be a string',
  },
  conveniences: {
    invalidFormat: 'Conveniences must be a valid string',
  },
  coordinates: {
    invalidFormat: 'Coordinates must be a valid object',
  },
  countPeople: {
    invalidFormat: 'countPeople must be an integer',
    lengthField: 'Minimum value is 1, maximum is 10',
  },
  countRooms: {
    invalidFormat: 'countRooms must be an integer',
    lengthField: 'Minimum value is 1, maximum is 8',
  },
  date: {
    invalidFormat: 'Date must be a valid ISO date',
  },
  description: {
    minLength: 'Minimum description length is 20 characters',
    maxLength: 'Maximum description length is 1024 characters',
  },
  flagIsFavourites: {
    invalidFormat: 'flagIsFavourites must be a boolean',
  },
  flagIsPremium: {
    invalidFormat: 'flagIsPremium must be a boolean',
  },
  images: {
    invalidFormat: 'images must be an array',
  },
  name: {
    minLength: 'Minimum title length is 10 characters',
    maxLength: 'Maximum title length is 100 characters',
  },
  price: {
    invalidFormat: 'price must be an integer',
    lengthField: 'Minimum value is 100, maximum is 100000',
  },
  previewImg: {
    invalidFormat: 'previewImg must be a string',
  },
  rating: {
    invalidFormat: 'rating must be a number',
    lengthField: 'Minimum value is 1, maximum is 5',
  },
  typeHousing: {
    invalidFormat: 'typeHousing must be a string',
  },
} as const;
