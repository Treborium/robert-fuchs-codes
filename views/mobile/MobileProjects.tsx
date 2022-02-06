import React from 'react';
import {
  Box,
} from '@mui/material';

import HamburgerMenu from '../../components/HamburgerMenu';
import { ProjectData, ProjectsData } from '../../data/projectsData';
import ProjectCard from '../../components/ProjectCard';

export default function MobileProjects() {
  const additionalCardProps = {
    imageSrc: undefined,
    sx: { marginBottom: '3vh' },
  };

  return (
    <>
      <HamburgerMenu />
      <Box sx={styles.container}>
        {ProjectsData.map((props: ProjectData, index) => (
          <ProjectCard key={index} {...{ ...props, ...additionalCardProps }} />
        ))}
      </Box>
    </>
  );
}

const styles = {
  container: {
    marginTop: '10vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const;
