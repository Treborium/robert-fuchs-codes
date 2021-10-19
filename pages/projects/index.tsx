import React from 'react';

import Page from '../../components/Page';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import DesktopProjects from '../../views/desktop/DesktopProjects';
import MobileProjects from '../../views/mobile/MobileProjects';

export default function Projects() {
  const isDesktop = useMediaQuery();
  return <Page>{isDesktop ? <DesktopProjects /> : <MobileProjects />}</Page>;
}
