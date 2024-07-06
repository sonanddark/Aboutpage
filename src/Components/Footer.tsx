import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from './Button';
import Image from 'next/image';
import footerLogo from "../../public/GIFS/logoWhite.gif";
import footerStampArrow from "../assets/footerStampArrow.svg"
import AnimateText from './AnimateText'; // Ensure this is the correct path
const textRadius = 100; // Update this with the appropriate value
const repeatedText = 'Your repeated text here '; // Update this with the appropriate value

const Footer = () => {
  return (
    <footer className="w-100">
      <div className="flex md:flex-row flex-col md:justify-between md:m-auto md:items-center md:h-[408.52px] bg-[#DF1780]">
        <div className="md:m-[68px]">
          <AnimateText
            topText="LOUDER"
            bottomText="THE BETTER"
            topTextCustomClass="flex md:justify-start font-bold text-[77px] md:text-[87.51px] text-white ml-20"
            bottomTextCustomClass="flex md:justify-center font-semibold md:text-[58px] text-[50px] text-white ml-20"
          />
          <div className="md:block hidden">
            <PrimaryButton
              customClassName={{
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
            />
          </div>
        </div>
        <div className="flex md:justify-end items-center md:mr-10 mr-[0.5]">
          <div className="md:hidden block">
            <PrimaryButton
              customClassName={{
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
            />
          </div>
          <div className="flex justify-end gap-x-7">
            <Image alt="footerLogo" src={footerLogo} className="md:w-2/12 w-3/12 -mr-10" />
            <motion.svg
              className="overflow-x-hidden md:w-[200px] w-[90px]"
              viewBox="0 0 400 400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{ originX: "20%", originY: "20%" }}
            >
              <circle
                cx="200"
                cy="200"
                r="100"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <motion.image
                id="arrow-footer-1"
                href={footerStampArrow.src}
                height="100"
                width="100"
                x="150"
                y="150"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{
                  originX: "50%",
                  originY: "50%"
                }}
              />
              <path
                id="circlePath"
                fill="none"
                d={`M200,200 m-${textRadius},0 a ${textRadius},${textRadius} 0 1,0 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,0 -${textRadius * 2},0`}
              />
              <text
                fill="#fff"
                fontSize="12"
                letterSpacing="3"
              >
                <motion.textPath
                  xlinkHref="#circlePath"
                  startOffset="0%"
                  animate={{ startOffset: ["0%"] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  {repeatedText}
                </motion.textPath>
              </text>
            </motion.svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
