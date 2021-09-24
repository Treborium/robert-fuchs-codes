import dynamic from 'next/dynamic'
import { useMediaQuery } from '../hooks/useMediaQuery';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const DesktopApp = dynamic(() => import('../components/Desktop'));
const MobileApp = dynamic(() => import('../components/Mobile'));

export default function HomePage() {
  const isTwoColumnMode = useMediaQuery('(min-width: 800px)');

  return isTwoColumnMode ? <DesktopApp /> : <MobileApp />;
}
