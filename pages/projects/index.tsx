import React from 'react';
import { Box } from '@mui/material';

import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import ProjectCard, {
  Props as ProjectProps,
} from '../../components/ProjectCard';

export default function Projects() {
  const numHalfOfProjects = Math.floor(projects.length / 2);

  const renderProjects = (start: number, end: number) => {
    return projects
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
    <Page>
      <Navigation />
      <Box sx={styles.container}>
        <Box sx={styles.row}>
          {renderProjects(0, numHalfOfProjects)}
        </Box>
        <Box sx={styles.row}>
          {renderProjects(numHalfOfProjects, projects.length)}
        </Box>
      </Box>
    </Page>
  );
}

const projects: ProjectProps[] = [
  {
    title: 'Personal Website',
    description: 'my personal website written with React.js 👨',
    imageSrc: '/personal-website-banner.png',
    link: 'https://github.com/Treborium/robert-fuchs-codes',
  },
  {
    title: 'Karlsruher Könige',
    description:
      'a mobile first webpage for the awesome gymnastics club of KIT 🤸‍♀️',
    imageSrc: '',
    link: 'https://github.com/Treborium/karlsruher-koenige',
  },
  {
    title: 'wmctrl in Rust',
    description:
      'a wrapper for the command line tool wmctrl written in Rust ⚙️',
    imageSrc: '',
    link: 'https://github.com/Treborium/rust-wmctrl',
  },
  {
    title: 'Font Sizer (Firefox extension)',
    description:
      'a firefox extension to easily change the font size of a website 🔤',
    imageSrc: '',
    link: 'https://github.com/Treborium/Font-Sizer-Firefox',
  },
  {
    title: 'Switcheroo',
    description: 'easily switch between source and test files in vscode 🔄',
    imageSrc: '',
    link: 'https://github.com/Treborium/switcheroo',
  },
  {
    title: 'Local Snippet Manager',
    description: 'code snippet manager per project 📚',
    imageSrc: '',
    link: 'ht‚tps://github.com/Treborium/local-snippet-manager',
  },
];

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
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
