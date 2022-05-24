import { ReactElement } from "react";
import { Navbar } from "../components/Navbar";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About me</h1>
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