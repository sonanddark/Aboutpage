import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import { logo, wink } from "public/images/assets";

const WinkSection: React.FC = () => {
  return (
    <div className="max-w-[1215.54px] mx-auto mt-[100px] mb-[120px] border-[0.5px] border-[#1D1E1C]">
      <div className="flex border-[0.5px] border-[#1D1E1C]">
        <div className="w-[25%] flex justify-center items-center">
          <Image className="w-[70%] lg:w-auto" src={logo} alt="image logo" />
        </div>
        <div className="border-x-[0.5px] border-[#1D1E1C] w-[3%]"></div>
        <div className="w-[72%] ">
          <div className="w-[90%] mx-auto py-[60px]">
            <Image className="ml-[60px]" src={wink} alt="wink" />
            <p className="text-[12px] font-[500] italic mt-8">verb</p>
            <p className="text-[18px] font-[500] ml-[12px] mt-[16px]">
              1. close and open one eye quickly, typically to indicate that something is a joke or a secret or
              as signal of affection or greeting."he winked at Nicole as he passed"
            </p>
            <p className="text-[18px] font-[500] ml-[12px] mt-[80px]">
              2. (of a bright object or a light) or flash intermittently. <br /> "the diamond on her finger
              winked in the moonlight"
            </p>
          </div>
          <div className="relative">
            <div className="w-full  bg-[#1D1E1C] h-[1px] !absolute  "></div>
          </div>
          <div className="w-[90%] mx-auto py-[60px]">
            <p className="text-[12px] font-[500] italic mt-8">noun</p>
            <p className="text-[18px] font-[500] ml-[12px] mt-[16px]">
              1. close and open one eye quickly, typically to indicate that something is a joke or a secret or
              as signal of affection or greeting."he winked at Nicole as he passed"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinkSection;
