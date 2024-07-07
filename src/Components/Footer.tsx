import React from 'react';
import TextAroundCircle from './TextAroundCircle';
import AnimateWhenInViewport from './AnimateWhenInViewport';
import AnimatedButton from './AnimatedButton';
import Image from 'next/image';
import footerLogo from '../assets/footerLogo.svg'

const Footer = () => {
  return (
    <footer className="w-100">
      <div className="flex md:flex-row flex-col md:justify-between md:m-auto md:items-center md:h-[408.52px] bg-[#DF1780]">
        <div className="md:m-[68px]">
          <AnimateWhenInViewport 
            textToBeAnimated='LOUDER'
            cssClass='flex justify-center md:justify-start font-bold text-[77px] md:text-[87.51px] text-white ml-5'/>
          <AnimateWhenInViewport 
            textToBeAnimated='THE BETTER'
            cssClass='flex justify-center ml-1 font-semibold md:text-[58px] text-[53px] ml-5 -mt-11 text-white'/>
          <div className="md:block hidden">
          <AnimatedButton
              customCssStyles={{
              marginLeft: "25px",
              marginTop: "20px",
              backgroundColor: "white",
              border: "none",
              color: "#DF1780",
              padding: "10px 20px",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              display: 'flex',
              alignItems: 'center',
              fontSize: '15.25px',
              lineHeight: "25.6px",
              fontWeight: '590',
              fontFamily: "SFProDisplay, sans-serif"
            }}
              text="LET'S GO"
              arrowStyle={{
                marginLeft: '8px',
                transition: 'transform 0.3s ease',
                stroke: '#DF1780'
              }}
            />
          </div>
        </div>
        <div className="flex md:justify-end items-center md:mr-10 mr-[0.5]">
        <div className="block md:hidden">
          <AnimatedButton
              customCssStyles={{
              marginLeft: "50px",
              marginTop: "20px",
              backgroundColor: "white",
              border: "none",
              color: "#DF1780",
              padding: "10px 17px",
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              display: 'flex',
              alignItems: 'center',
              fontSize: '13.81px',
              lineHeight: "23.18px",
              fontWeight: '590',
              fontFamily: "SFProDisplay, sans-serif"
            }}
              text="LET'S GO"
              arrowStyle={{
                marginLeft: '8px',
                transition: 'transform 0.3s ease',
                stroke: '#DF1780'
              }}
            />
          </div>
            <div className="flex justify-end gap-x-7 ">
            <Image alt="footerLogo" src={footerLogo} className="md:w-2/12 w-3/12 -mr-10" /> 

            <div className="md:w-[200px] w-[90px]  md:block hidden">
              <TextAroundCircle
                className="footer-circular-text"
                id="footer-text-right-circle"
                text=" WELCOME TO A NEW ERA OF CARE *** WELCOME TO A NEW ERA OF CARE *** "
                key={1} 
                width={200}
                height={200}
                radius={43.3}
                strokeColor="white"
                strokeWidth={2}
                fontSize={10}
              />
            </div>
            <div className="w-[100px] md:hidden block ">
            <TextAroundCircle
                className="footer-circular-text"
                id="footer-text-right-circle"
                text=" WELCOME TO A NEW ERA OF CARE *** WELCOME TO A NEW ERA OF CARE *** "
                key={1} 
                width={100}
                height={100}
                radius={21.76}
                strokeColor="white"
                strokeWidth={2}
                fontSize={5}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
