"use client";
import Image from "next/image";
import PrimaryButton from "@/Components/Button";
import SecondaryButton from "@/Components/Button";
import AnimatedText from '@/Components/AnimatedText'
import footerLogo from "../../public/GIFS/logoWhite.gif";
// import footerLogoStamp from "../assets/footerLogoStamp.png";
import footerStampArrow from "../assets/footerStampArrow.svg"
import { motion } from 'framer-motion';
import AnimateText from '@/Components/AnimateText'
import TeamInformation from "@/Components/TeamInformation";
import ExploreTheRest from '@/Components/ExploreTheRest'
import Card from '../Components/SocialPostsCardView';
import rectangle from '../assets/bgImage.png'
import camera from '../assets/camera-black.svg'
import goVegan from "../assets/goVegan.png"
import twitterLogo from "../assets/twitterLogo.png"
import Link from "next/link";
import { useState } from "react";
import CustomSlider from "@/Components/CardSlider";
import HorizontalSection from "@/Components/HorizontalSection"

const cardItems = [
  { id: 1, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 2, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 3, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 4, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 5, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },
  { id: 6, title: '', hashtags: ['#vegan', '#healthy'], socialAppIcon: twitterLogo.src, rectangle: rectangle.src, goVegan: goVegan.src, camera: camera.src, date: '15 Oct 2019', description: 'The Best Vegan Chocolate Cake- A quick and easy recipe! It’s super moist, rich and full of chocolate. ' },

  // Add more cards as per your requirement
];
export default function Home() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);;
  // Define the radius for the text path and the inner circle
  const textRadius = 120;
  const innerCircleRadius = 102;  // Smaller radius for the inner circle

  // Calculate the approximate circumference of the text path

  // Prepare the text to cover the full circumference
  const text = "Welcome to a New Era of Care * * * "; // Base text to display
  const imageUrl = "/path/to/your/image.jpg";  // Path to your image file
  const repeatedText = text.repeat(3); // Adjust repetition based on your text length and desired density

  return (
    <div className="">


      <section className="bg-[#D9D9D9]">
        {/* <h1 className="" style={{ fontWeight: '860', fontFamily: "SFProDisplay, sans-serif" }}></h1>
         
         */}
        {/* <AnimatedText sentences={sentences} /> */}
        <div className="flex justify-center">
          <AnimatedText text="ALL THAT WE DID!!!" customClassName="font-bold  md:text-[100px] text-[30px]  " />
        </div>
        <div className="flex justify-center">
          <AnimatedText text="THAT YOU MUST HAVE SEEN" customClassName="text-center md:-mt-7 -mt-5 mb-10 md:text-[27.3px] text-[9px]" Style={{ fontWeight: '700', lineHeight: '32.52px', fontFamily: "SFProDisplay, sans-serif" }} />
        </div>

        <TeamInformation />
        <div className="mt-20 flex justify-center">
          <SecondaryButton
            outerClassName="bg-[#DF1780] p-5 w-[80%] md:w-[17%] flex md:justify-center justify-center"
            customClassName={{

              backgroundColor: "#DF1780",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: 'flex',
              alignItems: 'center',
              fontSize: '15.5px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif",


              justifyContent: "space-between"
            }}
            text="SEE MORE"
          />
        </div>

      </section>




      <section className="flex pb-10 bg-[#D9D9D9] flex-col md:flex-row">

        <div className="md:w-4/12 flex md:flex-col ">
          {/* <h3
            className=""
            style={}

          ></h3> */}
          <div className="w-7/12 md:w-full mt-14 md:mt-80">
            <AnimatedText text="Stay up-to-date on the
            latest Ghmza and share
            your thoughts." customClassName="md:w-4/12 w-6/12 md:ml-24 ml-6 md:text-[18.28px] text-[9.5px] md:leading-[32px] leading-[16.9px]" Style={{ fontWeight: '590', color: "#000000", fontFamily: "SFProDisplay, sans-serif", }} />
          </div>
          <div className="w-6/12 md:mt-[75%] mt-12">
            <ExploreTheRest
              topText="EXPLORE"
              bottomText="THE REST"
              topTextCustomClass="md:ml-32 md:text-[58px] text-[24.83px] flex justify-start"
              bottomTextCustomClass="md:text-[58px] -mt-3 md:-mt-0 text-[24.83px] md:ml-[120px] md:flex md:font-[400]"
              topTextStyle={{ fontWeight: '860', color: "#000000" }}
              bottomTextStyle={{}}
            />
          </div>
          <div className="hidden md:block">
            <SecondaryButton
              customClassName={{
                marginTop: "20px",
                backgroundColor: "#DF1780",
                border: "none",
                color: "white",
                padding: "10px 20px",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                display: 'flex',
                alignItems: 'center',
                fontSize: '15.5px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif",
                width: "46%",
                marginLeft: "11%",
                justifyContent: "space-between"
              }}
              text="TAKE ME BACK"
            />
          </div>

        </div>

        <div className="hidden md:block">
          <motion.div layout className="grid grid-cols-3 relative mt-48 gap-x-[-8px] gap-y-[-4px]">
            {cardItems.map((card, index) => (
              <Card
                key={card.id}
                data={card}
                hover={Math.floor(index % 3) === hoveredColumn}
                onMouseEnter={() => setHoveredColumn(Math.floor(index % 3))}
                onMouseLeave={() => setHoveredColumn(null)}
              />
            ))}
          </motion.div>
        </div>
  
      </section>

      <div className="bg-[#D9D9D9] block md:hidden ">
        <CustomSlider cards={cardItems} />

      </div>





      <footer className="w-100">
        <div className="flex md:flex-row flex-col md:justify-between  md:m-auto md:items-center md:h-[408.52px] bg-[#DF1780]">
          <div className="md:m-[68px]">
            <AnimateText
              topText="LOUDER"
              bottomText="THE BETTER"
              topTextCustomClass="flex md:justify-start font-bold text-[77px] md:text-[87.51px] text-white ml-20"
              bottomTextCustomClass="flex md:justify-center font-semibold md:text-[58px] text-[50px] text-white ml-20"
            // topTextStyle={{ display: 'flex', justifyContent: 'start', fontWeight: '860', fontSize: '87.51px', color: "#ffffff" }}
            // bottomTextStyle={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '58px', letterSpacing: '3px', color: "#ffffff" }}
            />
            {/* <h1 className="text-white flex flex-col" style={{ fontSize: "87.51px", fontWeight: "860", lineHeight: "69.6px", fontFamily: "SFProDisplay, sans-serif" }}>LOUDER <span style={{ fontWeight: "700", fontSize: "58px", letterSpacing: "3px" }}>THE BETTER</span></h1> */}
            <div className="md:block hidden">
              <PrimaryButton customClassName={{
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
                fontSize: '15.25px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif"
              }}
                text="LET'S GO" />
            </div>

          </div>
          <div className="flex md:justify-end items-center md:mr-10 mr-[0.5]">
            <div className="md:hidden block">
              <PrimaryButton customClassName={{
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
                fontSize: '15.25px', lineHeight: "25.6px", fontWeight: '590', fontFamily: "SFProDisplay, sans-serif"
              }}
                text="LET'S GO" />
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
                {/* Static Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="100" // Circle radius fitting the path
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Counter-Rotated Image to Appear Static */}
                <motion.image
                  id="arrow-footer-1"
                  href={footerStampArrow.src}
                  height="100" // Image dimensions to fit within the circle
                  width="100"
                  x="150" // Center image horizontally
                  y="150" // Center image vertically
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  style={{
                    originX: "50%", // Set the origin of rotation to the center of the image
                    originY: "50%"
                  }}
                />
                {/* Path for Text */}
                <path
                  id="circlePath"
                  fill="none"
                  d={`M200,200 m-${textRadius},0 a ${textRadius},${textRadius} 0 1,0 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,0 -${textRadius * 2},0`}
                />
                {/* Animated Text Path */}
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
    </div>

  );
}
