import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TeamInformation() {
    const [isHovering, setIsHovering] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        });
    };

    const handleMouseEnter = (event: any, url: string) => {
        setCoords({ x: event.clientX, y: event.clientY });
        setIsHovering(true);
        setImageUrl(url);
    };
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div onMouseMove={handleMouseMove}>
            <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'https://picsum.photos/id/1/200/300')}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
            >
                Hover over me 1
            </div>
            <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'https://picsum.photos/id/2/200/300')}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
            >
                Hover over me 2
            </div>
            <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'https://picsum.photos/id/3/200/300')}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
            >
                Hover over me 3
            </div>
            <div 
                onMouseEnter={(e) => handleMouseEnter(e, 'https://picsum.photos/id/4/200/300')}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
            >
                Hover over me 4
            </div>
            {isHovering && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ x: coords.x, y: coords.y, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                      style={{
                        position: 'fixed',
                        pointerEvents: 'none',
                        left: 0,
                        top: 0,
                        width: '100px',
                        height: '100px',
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover'
                    }}
                />
            )}
        </div>
    );
}
