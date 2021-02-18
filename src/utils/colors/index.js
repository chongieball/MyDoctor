export const mainColors = {
  greenPrimary: '#0BCAD4',
  darkPrimary: '#112340',
  grayPrimary: '#7D8797',
  whitePrimary: '#E5E5E5',
  trueWhite: 'white',
  graySecondary: '#E9E9E9',
  darkSecondary: '#495A75',
  white3: '#EDFCFD',
  gray3: '#8092AF',
  gray4: '#EDEEF0',
  blue2: '#0066CB',
};

export const colors = {
  primary: mainColors.greenPrimary,
  secondary: mainColors.darkPrimary,
  white: mainColors.trueWhite,
  black: 'black',
  text: {
    default: mainColors.darkPrimary,
    secondary: mainColors.trueWhite,
    accent: mainColors.grayPrimary,
    inactive: mainColors.darkSecondary,
    active: mainColors.greenPrimary,
    bodyHeader: mainColors.gray3,
  },
  button: {
    primary: {
      background: mainColors.greenPrimary,
      text: mainColors.whitePrimary,
    },
    secondary: {
      background: mainColors.trueWhite,
      text: mainColors.darkPrimary,
    },
  },
  input: {
    border: mainColors.graySecondary,
    label: mainColors.grayPrimary,
  },
  link: {
    default: mainColors.grayPrimary,
  },
  border: mainColors.graySecondary,
  cardBackground: mainColors.white3,
  disable: mainColors.gray4,
  tertiary: mainColors.blue2,
};
