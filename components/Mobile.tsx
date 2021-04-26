import React from 'react';
import Image from 'next/image';
import { Linkedin, GitHub, Mail } from 'react-feather';
import { backgroundColor, secondaryBackgroundColor, fontColor } from './Theme';
import IconButton from './IconButton';
import Divider from './Divider';

export default function MobileApp(): JSX.Element {
  const iconSize = '10vw';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch',  padding: '0 3vw', backgroundColor: backgroundColor, height: '100vh', width: '100vw', border: 'none' }}>
      <div style={{ position: 'relative', height: '30vh', marginTop: ''}}>
        <Image src='/logo512.webp' alt='Roberts Avatar' layout='fill' objectFit='contain' priority={true}/>
      </div>

      <p style={{ fontSize: '8vw', fontFamily: 'Baloo Chettan 2', backgroundColor: secondaryBackgroundColor, color: fontColor, textAlign: 'center', padding: '1vh 0', margin: '0 3vw' }}>
        Robert Fuchs
      </p>

      <p style={{ fontSize: '6vw', fontFamily: 'Baloo Chettan 2', color: fontColor, textAlign: 'center', padding: '0 5vw' }}>
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
  );
}