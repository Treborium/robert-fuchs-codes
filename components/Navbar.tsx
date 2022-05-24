import Link from 'next/link';

export const Navbar: React.FC<{}> = () => {
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
      }}
    >
      <div style={{display: 'flex', width: '50vw', justifyContent: 'space-around'}}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  );
};
