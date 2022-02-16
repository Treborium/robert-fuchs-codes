const iconSizes = { base: '6rem', md: '8rem', xl: '10rem' };

export const ExperienceItemsStyles = {
  icon: {
    width: iconSizes,
    height: iconSizes,
    color: 'white',
    marginBottom: {base: '2vh'},
  },
  label: {
    fontSize: {base: '2rem'},
    color: 'white',
    textAlign: 'center',
  },
} as const;
