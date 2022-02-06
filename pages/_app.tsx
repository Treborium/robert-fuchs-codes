import React from 'react';
import Head from 'next/head';
import '../styles.css';
import { Layout } from '../components/Layout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/profile-picture.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Personal website of Robert Fuchs' />
        <link rel='apple-touch-icon' href='/profile-picture.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Baloo+Chettan+2&display=swap'
          rel='stylesheet'
        />
        <title>Robert Fuchs</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
