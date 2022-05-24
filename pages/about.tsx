import { ReactElement } from 'react';
import { Navbar } from '../components/Navbar';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <div>
      {Array.from(Array(100).keys()).map((_, index) => (
        <h1 key={index}>About me</h1>
      ))}
    </div>
  );
};

About.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default About;
