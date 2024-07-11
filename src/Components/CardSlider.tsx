import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type CardData = {
  id: number;
  title: string;
  hashtags: string[];
  socialAppIcon: string;
  rectangle: string;
  goVegan: string;
  camera: any;
  date: string;
  description: string;
};

interface CustomSliderProps {
  cards: CardData[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ cards }) => {
  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    ltr: true,
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 0.5,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden w-[165px] md:w-[300px] rounded"
          >
            <div className="w-[165px] md:w-[300px]">
              <img className="" src={card.rectangle} alt={card.title} />
            </div>
            <div className=" bg-white w-[165px] md:w-[300px]">
              <div className="flex gap-x-3">
                <img className="-mt-4 ml-2 w-10" src={card.goVegan} alt="" />
                <div className="flex flex-col">
                  <h4
                    className="mb-2 font-bold text-[7.50px] leading-[9px]"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-[#9CA0AC]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "5px",
                      fontWeight: "400",
                      lineHeight: "5.86px",
                      textAlign: "left",
                    }}
                  >
                    {card.date}
                  </p>
                </div>
              </div>
              <div className="w-[165px] md:w-[300px] pt-2 px-3">
                <p
                  className="font-normal text-[5.8px] leading-[10px]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {card.hashtags.map((item, index) => (
                    <span className="text-[blue]" key={index}>
                      {item + " "}
                    </span>
                  ))}
                  {card.description}
                </p>
              </div>
              <div className="pl-3 pb-1">
                <Image
                  className="mt-3 mb-4"
                  alt="twitterLogo"
                  src={card.socialAppIcon}
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
