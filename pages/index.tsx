import { ReactElement } from 'react';
import { Navbar } from '../components/Navbar';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      {Array.from(Array(100).keys()).map((_, index) => (
        <h1 key={index}>Hi 👋</h1>
      ))}
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default Home;
