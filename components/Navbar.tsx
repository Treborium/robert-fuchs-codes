import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState('/');

  const getStyleDependingOnNavigationState = (route: string) =>
    activePage === route ? 'underline' : 'none';

  useEffect(() => {
    console.log('updating active page to:', router.route);
    setActivePage(router.route);
  }, [router]);

  return (
    <div
      style={{
        width: '100vw',
        height: '10vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        position: 'sticky',
        left: 0,
        top: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '50vw',
          justifyContent: 'space-around',
        }}
      >
        <Link href='/'>
          <a
            style={{
              textDecoration: getStyleDependingOnNavigationState('/'),
            }}
          >
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a
            style={{
              textDecoration: getStyleDependingOnNavigationState('/about'),
            }}
          >
            About
          </a>
        </Link>
        <Link href='/contact'>
          <a
            style={{
              textDecoration: getStyleDependingOnNavigationState('/contact'),
            }}
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};
