import React from 'react';
import { Box } from '@mui/material';

import Navigation, { NavigationPages } from '../../components/Navigation';
import { ProjectsData, ProjectData } from '../../data/projectsData';
import ProjectCard, {
  Props as ProjectProps,
} from '../../components/ProjectCard';

export default function DesktopProjects() {

  return (
    <>
      <Navigation currentPage={NavigationPages.Projects}/>
      <Box sx={styles.container}>
        {ProjectsData.map((data: ProjectData) => {
          return (
            <ProjectCard key={data.title} {...data} sx={styles.card}/>
          );
        })}
      </Box>
    </>
  );
}



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingX: '2vw',
    paddingY: '5rem',
  },
  card: {
    marginX: '1vw',
  }
} as const;
