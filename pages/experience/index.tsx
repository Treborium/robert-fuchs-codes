import React from 'react';

import Page from '../../components/Page';
import DesktopExperience from '../../views/desktop/DesktopExperience';
import MobileExperience from '../../views/mobile/MobileExperience';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Experience() {
  const isDesktop = useMediaQuery();

  return <Page>
    {isDesktop ? <DesktopExperience /> : <MobileExperience />}
  </Page>;
}
