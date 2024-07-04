import React, { useEffect, useRef } from 'react';
import '../app/globals.css';

const CardSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const elementIsVisibleInViewport = (el: HTMLElement): boolean => {
        const { top } = el.getBoundingClientRect();
        const { innerHeight } = window;

        return top < innerHeight - top;
    };

    const handleCardScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const bodyClassList = document.body.classList;
        const sectionElement = sectionRef.current;
        const cards = cardsRef.current;

        if (sectionElement && elementIsVisibleInViewport(sectionElement)) {
            bodyClassList.remove('theme-black');
            if (!bodyClassList.contains('theme-light-gray')) {
                bodyClassList.add('theme-light-gray');
            }
        } else {
            bodyClassList.remove('theme-light-gray');
            if (!bodyClassList.contains('theme-black')) {
                bodyClassList.add('theme-black');
            }
        }

        cards.forEach(card => {
            if (card && elementIsVisibleInViewport(card)) {
                card.classList.add('card-animate');
            } else if (card) {
                card.classList.remove('card-animate');
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleCardScroll);
        return () => {
            window.removeEventListener('scroll', handleCardScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} data-module-name="card-section">
            <div className="container">
                <div className="card-section-container sticky">
                    <div className="section-descr">
                        <div className="description-lines">GHMZA FOR YOU</div>
                        <div className="description-lines">that technology can transform healthcare to put people first. We put</div>
                        <div className="description-lines">humanity back at the center of healthcare with technology that</div>
                        <div className="description-lines">simplifies complexity, accelerates capacity, and improves outcomes.</div>
                    </div>
                    <div className="section-title">
                        <div className="title-lines">WE DO A LOT!</div>
                        <div className="title-lines">OF COOOOL</div>
                    </div>
                    <div className="button">
                        <div className="button-text">Contact</div>
                        <img className="button-arrow" src="assets/SVG.png" alt="" />
                    </div>
                    <div className="image-container" style={{ marginTop: '20%' }}>
                        <img src="assets/Group.png" alt="" />
                    </div>
                </div>
                <div className="cards-list">
                    {[...Array(5)].map((_, i) => (
                        <div className="cards-item" key={i} ref={el => (cardsRef.current[i] = el)}>
                            <div className="card-item-desc-container">
                                <div className="card-item-title">Music</div>
                                <div className="description">
                                    <div className="card-item-desc">We build mobile and web-based apps,</div>
                                    <div className="card-item-desc">platforms, and infrastructure fitted to your</div>
                                    <div className="card-item-desc">needs. We have an open solutions</div>
                                    <div className="card-item-desc">framework, so we work to fit your business,</div>
                                    <div className="card-item-desc">not the other way around.</div>
                                </div>
                            </div>
                            <div className="card-image">
                                <img src={`assets/Group 100000420${i + 5}.png`} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardSection;