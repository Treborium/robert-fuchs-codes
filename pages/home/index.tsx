import React from 'react';

import Page from '../../components/Page';
import DesktopHome from '../../views/desktop/DesktopHome';
import MobileHome from '../../views/mobile/MobileHome';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 800px)');
  return <Page>{isDesktop ? <DesktopHome /> : <MobileHome />}</Page>;
}
