import {
  Globe,
  Activity,
  Settings,
  Type,
  RefreshCw,
  Code,
} from 'react-feather';

import { Props as ProjectProps } from '../components/ProjectCard';

export interface ProjectData extends ProjectProps {
  icon: JSX.Element;
}

export const ProjectsData: ProjectData[] = [
  {
    title: 'Personal Website',
    description: 'my personal website written with React.js 👨',
    imageSrc: '/personal-website-banner.png',
    link: 'https://github.com/Treborium/robert-fuchs-codes',
    icon: <Globe />,
  },
  {
    title: 'Karlsruher Könige',
    description:
      'a mobile first webpage for the awesome gymnastics club of KIT 🤸‍♀️',
    imageSrc: '',
    link: 'https://github.com/Treborium/karlsruher-koenige',
    icon: <Activity />,
  },
  {
    title: 'wmctrl in Rust',
    description:
      'a wrapper for the command line tool wmctrl written in Rust ⚙️',
    imageSrc: '',
    link: 'https://github.com/Treborium/rust-wmctrl',
    icon: <Settings />,
  },
  {
    title: 'Font Sizer (Firefox extension)',
    description:
      'a firefox extension to easily change the font size of a website 🔤',
    imageSrc: '',
    link: 'https://github.com/Treborium/Font-Sizer-Firefox',
    icon: <Type />,
  },
  {
    title: 'Switcheroo',
    description: 'easily switch between source and test files in vscode 🔄',
    imageSrc: '',
    link: 'https://github.com/Treborium/switcheroo',
    icon: <RefreshCw />,
  },
  {
    title: 'Local Snippet Manager',
    description: 'code snippet manager per project 📚',
    imageSrc: '',
    link: 'ht‚tps://github.com/Treborium/local-snippet-manager',
    icon: <Code />,
  },
];
