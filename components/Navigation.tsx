import React from 'react';
import { Box, Link, Typography } from '@mui/material';

import { theme } from './Theme';

export enum NavigationPages {
  Home = 'home',
  Experience = 'experience',
  Projects = 'projects',
}

interface Props {
  currentPage: NavigationPages;
}

export default function Navigation({ currentPage }: Props) {
  const linkProps = {
    color: theme.fontColor,
  };

  const highlightIfCurrent = (page: NavigationPages) => {
    if (page === currentPage) {
      return { ...styles.text, ...styles.highlighted };
    }
    return styles.text;
  }

  return (
    <Box sx={styles.container}>
      <Link href='/home' sx={highlightIfCurrent(NavigationPages.Home)} {...linkProps}>
        { NavigationPages.Home }
      </Link>
      <Typography sx={styles.divider}>|</Typography>
      <Link href='/experience' sx={highlightIfCurrent(NavigationPages.Experience)} {...linkProps}>
        { NavigationPages.Experience }
      </Link>
      <Typography sx={styles.divider}>|</Typography>
      <Link href='/projects' sx={highlightIfCurrent(NavigationPages.Projects)} {...linkProps}>
        { NavigationPages.Projects }
      </Link>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    position: 'fixed',
    top: '35px',
    left: '45px',
    border: 'none',
    fontFamily: theme.fontFamilySans,
  },
  divider: {
    margin: '0px 10px',
    fontSize: '1.5rem',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: '#000000',
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  highlighted: {
    fontWeight: 500,
  }
} as const;
