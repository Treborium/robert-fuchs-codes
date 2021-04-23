import React from 'react';
import Image from 'next/image';
import { Linkedin, GitHub, Mail } from 'react-feather';
import { backgroundColor, secondaryBackgroundColor, fontColor, iconSize } from "./Theme";

export default function Desktop(): JSX.Element {
  return (
    <div style={{ display: 'flex', backgroundColor: backgroundColor, height: '100vh', width: '100vw', border: 'none' }}>
      <div style={{ display: 'flex', padding: '0 3vw', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch' }}>

        <p style={{ fontSize: '4rem', fontFamily: 'Baloo Chettan 2', backgroundColor: secondaryBackgroundColor, color: fontColor, textAlign: 'center', padding: '1vh 0' }}>
          Robert Fuchs
        </p>

        <p style={{ fontSize: '3rem', fontFamily: 'Baloo Chettan 2', color: fontColor, textAlign: 'center', padding: '0 5vw' }}>
          Software Developer, Sports Enthusiast and Optimist
        </p>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <button aria-label='Open LinkedIn Profile' style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <a href='https://www.linkedin.com/in/robert-f-0b87a218a' target='_blank' rel='noopener noreferrer'>
              <Linkedin color={fontColor} size={iconSize} strokeWidth='1px'/>
            </a>
          </button>
          
          <hr style={{ width: '1px', height: iconSize, border: 'none', borderLeft: `1px solid hsla(200, 10%, 50%, 100)` }}/>

          <button aria-label='Open GitHub Profile' style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <a href='https://github.com/Treborium/robert-fuchs-codes' target='_blank' rel='noopener noreferrer'>
              <GitHub color={fontColor} size={iconSize} strokeWidth='1px'/>
            </a>
          </button>

          <hr style={{ width: '1px', height: iconSize, border: 'none', borderLeft: `1px solid hsla(200, 10%, 50%, 100)` }}/>

          <button aria-label='Send E-Mail to Robert' style={{ border: 'none', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <a href='mailto:robert@fuchs-mail.com' target='_blank' rel='noopener noreferrer'>
              <Mail color={fontColor} size={iconSize} strokeWidth='1px'/>
            </a>
          </button>

        </div>
      </div>

      <div style={{ overflow: 'hidden', flexDirection: 'row-reverse' }}>
        <Image src='/robert-and-tinka-large.jpg' alt='Robert Fuchs with his dog' height='1080' width='810px' />
      </div>
    </div>
  );
}