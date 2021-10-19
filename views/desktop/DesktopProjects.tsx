import React from 'react';
import { Box } from '@mui/material';

import Navigation from '../../components/Navigation';
import { ProjectsData } from '../../data/projectsData';
import ProjectCard, {
  Props as ProjectProps,
} from '../../components/ProjectCard';

export default function DesktopProjects() {
  const numHalfOfProjects = Math.floor(ProjectsData.length / 2);

  const renderProjects = (start: number, end: number) => {
    return ProjectsData
      .slice(start, end)
      .map((props: ProjectProps, index: number) => (
        <ProjectCard
          {...props}
          key={props.title}
          sx={index === end - start - 1 ? styles.lastCard : styles.none}
        />
      ));
  };

  return (
    <>
      <Navigation />
      <Box sx={styles.container}>
        <Box sx={styles.row}>
          {renderProjects(0, numHalfOfProjects)}
        </Box>
        <Box sx={styles.row}>
          {renderProjects(numHalfOfProjects, ProjectsData.length)}
        </Box>
      </Box>
    </>
  );
}



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '45px',
    paddingY: '15vh',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  lastCard: {
    marginRight: '45px',
  },
  none: {},
} as const;
