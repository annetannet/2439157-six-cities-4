export const CreateUserMessages = {
  avatarPath: {
    invalidFormat: 'Avatar path is required',
  },
  email: {
    invalidFormat: 'Email must be a valid address',
  },
  name: {
    invalidFormat: 'First name is required',
    lengthField: 'Minimum length is 1, maximum is 15',
  },
  password: {
    invalidFormat: 'Password is required',
    lengthField: 'Minimum length for password is 6, maximum is 12',
  },
  userType: {
    invalidFormat: 'User type is required',
  },
} as const;
