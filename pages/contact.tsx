import { ReactElement } from 'react';
import { Navbar } from '../components/Navbar';
import { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      {Array.from(Array(100).keys()).map((_, index) => (
        <h1 key={index}>Contact</h1>
      ))}
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default Contact;
