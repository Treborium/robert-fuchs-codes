import { ReactElement } from 'react';
import { Navbar } from '../components/Navbar';
import { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Get in contact</h1>
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
