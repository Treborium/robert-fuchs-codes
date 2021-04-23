import dynamic from 'next/dynamic'
import { useMediaQuery } from '../components/Hooks';

const DesktopApp = dynamic(() => import('../components/Desktop'));
const MobileApp = dynamic(() => import('../components/Mobile'));

export default function HomePage() {
  const isTwoColumnMode = useMediaQuery('(min-width: 800px)');

  return isTwoColumnMode ? <DesktopApp /> : <MobileApp />;
}
