import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import HamburgerMenu from '../../components/HamburgerMenu';
import { ProjectData, ProjectsData } from '../../data/projectsData';

export default function MobileProjects() {
  // TODO: Add outline to list
  return (
    <>
      <HamburgerMenu />
      <List sx={styles.list}>
        {ProjectsData.map((props: ProjectData, index: number) => (
          <ListItemButton
            component='a'
            href={props.link}
            sx={index % 2 === 1 && { backgroundColor: '#E0E0E0' }}
          >
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.title} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

const styles = {
  list: {
    marginTop: '10vh',
    width: '100vw',
  },
} as const;
