import React, { useEffect, useRef } from 'react';
import '../app/globals.css';
interface logoProps{
  height: string;
  width: string;
  color?: string;
}

const GhamzaLogo: React.FC<logoProps> = (props) => {
  const circlesRef = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const firstAnimation = () => {
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.animation = `first-animation 1s ease-in ${index * 0.2}s forwards`;
        }
      });
      setTimeout(secondAnimation, 1750);
    };

    const secondAnimation = () => {
      circlesRef.current.forEach((circle) => {
        if (circle) {
          circle.style.animation = `second-animation 1s ease-in-out forwards`;
        }
      });
      setTimeout(thirdAnimation, 1500);
    };

    const thirdAnimation = () => {
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.animation = `last-animation 1s ease-in-out ${(3 - index) * 0.2}s forwards`;
        }
      });
      setTimeout(firstAnimation, 2250);
    };

    firstAnimation();
  }, []);

  return (
    <div className="svg-container flex items-center">
      <svg className="animated-logo" width={props.width} height={props.width} viewBox="0 0 205 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={(el) => { circlesRef.current[0] = el }} className="circle" d="M198.39 13.2409C198.39 5.92816 192.462 0 185.149 0C177.836 0 171.908 5.92816 171.908 13.2409C171.908 20.5537 177.836 26.4819 185.149 26.4819C192.462 26.4819 198.39 20.5537 198.39 13.2409Z" fill="currentColor"/>
        <path ref={(el) => { circlesRef.current[1] = el }} className="circle" d="M129.63 13.2409C129.63 5.92816 123.702 0 116.389 0C109.076 0 103.148 5.92816 103.148 13.2409C103.148 20.5537 109.076 26.4819 116.389 26.4819C123.702 26.4819 129.63 20.5537 129.63 13.2409Z" fill="currentColor"/>
        <path ref={(el) => { circlesRef.current[2] = el }} className="circle" d="M60.8618 13.2409C60.8618 5.92816 54.9336 0 47.6208 0C40.3081 0 34.3799 5.92816 34.3799 13.2409C34.3799 20.5537 40.3081 26.4819 47.6208 26.4819C54.9336 26.4819 60.8618 20.5537 60.8618 13.2409Z" fill="currentColor"/>
        <path ref={(el) => { circlesRef.current[3] = el }} className="circle" d="M31.7705 13.2409C31.7705 5.92816 25.8423 0 18.5295 0C11.2167 0 5.28857 5.92816 5.28857 13.2409C5.28857 20.5537 11.2167 26.4819 18.5295 26.4819C25.8423 26.4819 31.7705 20.5537 31.7705 13.2409Z" fill="currentColor"/>
        <path d="M33.0595 33.0961C14.8329 33.0961 0 47.929 0 66.1555V98.9671H66.1189V66.1555C66.1189 47.929 51.286 33.0961 33.0595 33.0961ZM53.3832 66.1555C53.3832 67.7761 52.0677 69.0725 50.4662 69.0725H15.6527C14.0322 69.0725 12.7357 67.757 12.7357 66.1555C12.7357 64.535 14.0512 63.2385 15.6527 63.2385H50.4662C52.0868 63.2385 53.3832 64.554 53.3832 66.1555Z" fill="currentColor"/>
        <path d="M103.304 99.14V131.952C103.304 150.178 118.137 165.011 136.364 165.011C154.59 165.011 169.423 150.178 169.423 131.952V99.14H103.304ZM156.688 131.971C156.688 133.591 155.372 134.888 153.771 134.888H118.957C117.337 134.888 116.04 133.572 116.04 131.971C116.04 130.35 117.356 129.054 118.957 129.054H153.771C155.391 129.054 156.688 130.369 156.688 131.971Z" fill="currentColor"/>
        <path d="M174.226 63.221H204.235V33.0786H171.424C153.197 33.0786 138.364 47.9115 138.364 66.138C138.364 84.3646 153.197 99.1976 171.424 99.1976H204.235V69.0551H174.226C172.606 69.0551 171.309 67.7395 171.309 66.138C171.309 64.5175 172.625 63.221 174.226 63.221Z" fill="currentColor"/>
        <path d="M103.795 49.0091L47.676 123.051L71.6374 141.212L127.757 67.1704L103.795 49.0091Z" fill="currentColor"/>
      </svg>
    </div>
  );
};

export default GhamzaLogo;