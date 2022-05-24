import { ReactElement } from 'react';
import { Navbar } from '../components/Navbar';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Hi 👋</h1>
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
