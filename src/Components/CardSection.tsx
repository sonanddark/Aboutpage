import React, { forwardRef, useRef, useEffect } from "react";
import "../app/globals.css";
import AnimateWhenInViewport from "./AnimateWhenInViewport";
import { Group, image1, image2, image3, image4 } from "public/images/assets";
import Image from "next/image";

const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
  const { top } = el.getBoundingClientRect();
  console.log(top);

  const { innerHeight } = window;

  return top < innerHeight - top;
};

const CardSection = forwardRef<HTMLDivElement>((props, ref) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCardScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (sectionRef.current) {
        if (elementIsVisibleInViewport(sectionRef.current)) {
          document.body.classList.remove("theme-black");
          if (!document.body.classList.contains("theme-light-gray")) {
            document.body.classList.add("theme-light-gray");
          }
        } else {
          document.body.classList.remove("theme-light-gray");
          if (!document.body.classList.contains("theme-black")) {
            document.body.classList.add("theme-black");
          }
        }
      }
      // const cards = cardsListRef.current?.querySelectorAll(".cards-item");
      //   if (cards) {
      //     cards.forEach((card) => {
      //       if (elementIsVisibleInViewport(card as HTMLElement)) {
      //         card.classList.add("card-animate");
      //       } else {
      //         card.classList.remove("card-animate");
      //       }
      //     });
      //   } else {
      //     console.log('no cards');
      //   }
    };

    window.addEventListener("scroll", handleCardScroll);

    return () => {
      window.removeEventListener("scroll", handleCardScroll);
    };
  }, []);
  return (
    <section ref={ref} data-module-name="card-section">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:sticky lg:top-0 max-w-[37.2rem] gap-x-[6.25rem] gap-y-[1.67rem] flex flex-col items-start justify-items-center">
            <div className="section-description">
              <div className="description-lines">GHMZA FOR YOU</div>
              <div className="description-lines">
                that technology can transform healthcare to put people first. We put
              </div>
              <div className="description-lines">
                humanity back at the center of healthcare with technology that
              </div>
              <div className="description-lines">
                simplifies complexity, accelerates capacity, and improves outcomes.
              </div>
            </div>
            <div className="section-title">
              <AnimateWhenInViewport textToBeAnimated="WE DO A LOT!" cssClass="title-lines" />
              <AnimateWhenInViewport textToBeAnimated="OF COOOOL" cssClass="title-lines" />
            </div>
            <div className="button">
              <div className="button-text">Contact</div>
              <img className="button-arrow" src="assets/SVG.png" alt="" />
            </div>
            <div className="image-container hidden lg:block pb-5 mt-9" >
              <Image src={Group} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:pt-[38.57rem] lg:pb-[22.09rem]" ref={cardsListRef}>
            <div className="px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem] border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4">
                <div className="card-item-title">FILMS</div>
                <div className="description">
                  <div className="card-item-desc">We believe technology can dramatically</div>
                  <div className="card-item-desc">improve the experience of managing</div>
                  <div className="card-item-desc">health, and — when crafted with empathy</div>
                  <div className="card-item-desc">intention, and expertise — impact lives at</div>
                  <div className="card-item-desc">scale.</div>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image1} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4">
                <div className="card-item-title">MUSIC</div>
                <div className="description">
                  <div className="card-item-desc">We believe technology can dramatically</div>
                  <div className="card-item-desc">improve the experience of managing</div>
                  <div className="card-item-desc">health, and — when crafted with empathy</div>
                  <div className="card-item-desc">intention, and expertise — impact lives at</div>
                  <div className="card-item-desc">scale.</div>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image2} alt="" />
              </div>
            </div>
            <div className="px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4">
                <div className="card-item-title">SHOWS</div>
                <div className="description">
                  <div className="card-item-desc">We believe technology can dramatically</div>
                  <div className="card-item-desc">improve the experience of managing</div>
                  <div className="card-item-desc">health, and — when crafted with empathy</div>
                  <div className="card-item-desc">intention, and expertise — impact lives at</div>
                  <div className="card-item-desc">scale.</div>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image3} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem]  border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4">
                <div className="card-item-title">DOCUS</div>
                <div className="description">
                  <div className="card-item-desc">We believe technology can dramatically</div>
                  <div className="card-item-desc">improve the experience of managing</div>
                  <div className="card-item-desc">health, and — when crafted with empathy</div>
                  <div className="card-item-desc">intention, and expertise — impact lives at</div>
                  <div className="card-item-desc">scale.</div>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image4} alt="" />
              </div>
            </div>
            <div className=" px-10 py-5 h-[213px] w-[95%] lg:w-[31.25rem] border border-solid rounded-[10px] bg-[#df1780] mt-[5%] mb-[5%] flex flex-row items-center justify-between transition-all duration-500 ease-in-out">
              <div className="w-3/4">
                <div className="card-item-title">LIVE EXPERIENCES</div>
                <div className="description">
                  <div className="card-item-desc">We believe technology can dramatically</div>
                  <div className="card-item-desc">improve the experience of managing</div>
                  <div className="card-item-desc">health, and — when crafted with empathy</div>
                  <div className="card-item-desc">intention, and expertise — impact lives at</div>
                  <div className="card-item-desc">scale.</div>
                </div>
              </div>
              <div className="">
                <Image className="h-[40px] w-[40px]" src={image4} alt="" />
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
});



CardSection.displayName = "CardSection";

export default CardSection;
