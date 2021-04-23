import React from 'react';
import Image from 'next/image';
import { Linkedin, GitHub, Mail } from 'react-feather';
import { backgroundColor, secondaryBackgroundColor, fontColor, iconSize } from "./Theme";
import IconButton from './IconButton';
import Divider from './Divider';

export default function DesktopApp(): JSX.Element {
  return (
    <div style={{ display: 'flex', backgroundColor: backgroundColor, height: '100vh', width: '100vw', border: 'none' }}>
      <div style={{ display: 'flex', padding: '0 3vw', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch', width: '60vw' }}>

        <p style={{ fontSize: '3vw', fontFamily: 'Baloo Chettan 2', backgroundColor: secondaryBackgroundColor, color: fontColor, textAlign: 'center', padding: '1vh 0' }}>
          Robert Fuchs
        </p>

        <p style={{ fontSize: '2.5vw', fontFamily: 'Baloo Chettan 2', color: fontColor, textAlign: 'center', padding: '0 5vw' }}>
          Software Developer, Sports Enthusiast and Optimist
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <IconButton icon={<Linkedin color={fontColor} size={iconSize} strokeWidth='1px'/>} ariaLabel='Open LinkedIn Profile' href='https://www.linkedin.com/in/robert-f-0b87a218a' />
          <Divider height={iconSize} />
          <IconButton icon={<GitHub color={fontColor} size={iconSize} strokeWidth='1px'/>} ariaLabel='Open GitHub Profile' href='https://github.com/Treborium/robert-fuchs-codes' />
          <Divider height={iconSize} />
          <IconButton icon={<Mail color={fontColor} size={iconSize} strokeWidth='1px'/>} ariaLabel='Send E-Mail to Robert' href='mailto:robert@fuchs-mail.com' />
        </div>
      </div>

      <div style={{ width: '40vw', overflow: 'hidden', flexDirection: 'row-reverse' }}>
        {/* <Image src='/robert-and-tinka-large.jpg' alt='Robert Fuchs with his dog' height='1080' width='810px' /> */}
        <div style={{background: 'red', height: '100vh'}}/>
      </div>
    </div>
  );
}