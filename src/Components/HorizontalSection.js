// components/HorizontalSection.js

import Image from 'next/image';
import styles from './HorizontalSection.module.css'; // if using CSS modules

const HorizontalSection = () => {
    return (
        <section moduleName="horizontal-section">
            <div class="horizontal">
                <div class="horizontal-container sticky">
                    <div class="horizontal-list">
                        <div class="horizontal-item">
                            <div class="horizontal-item-text">
                                <div class="hori-f3">REAL IMPACT,</div>
                                <div class="hori-f3">REAL REACH</div>
                            </div>
                            <div class="horizontal-btn">
                                <div class="button">
                                    <div class="button-text">Contact</div>
                                    <img class="button-arrow" src="assets/SVG.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="horizontal-item">
                            <div class="horizontal-content">
                                <div class="hori-f1">203 M</div>
                                <div class="hori-f2">Real people — real lives — TOTAL REACH<br />OUR SO MANY PLATFORMS</div>
                            </div>
                            <div class="horiztonal-desc">
                                <div class="hori-f4">We’re on a mission to impact as many<br />lives as possible and build a
                                    better<br />world while we do it.<br/>
                                        Here’s our progress.</div>
                                    </div>
                                    <div class="horizontal-imgs">
                                        <div class="horizontal-img-cont1"><img src="assets/dog.png" alt="" /></div>
                                        <div class="horizontal-img-cont2"><img src="assets/manMountain.png" alt=""/></div>
                                        <div class="horizontal-img-cont3"><img src="assets/peoples.png" alt=""/></div>
                                        <div class="horizontal-img-cont4"><img src="assets/peoples.png" alt=""/></div>
                                    </div>
                                </div>
                                <div class="horizontal-item">
                                    <div class="horizontal-content">
                                        <div class="hori-f2">WE CREATED OVER</div>
                                        <div class="hori-f1">30000+</div>
                                        <div class="hori-f2">HOURS OF FOOTAGE COMBINED</div>
                                    </div>
                                    <div class="horiztonal-desc2">
                                        <div class="hori-f4">OUR ALL OUR GENRES WE CREATED OVER 12 <br/>
                                            SHOWS, 2 movies , 100+ LIVE <br/>
                                                EXPERIERNCES , and over 25 ARTISTS IN <br/>
                                                    THE MENA REGION</div>
                                            </div>
                                            <div class="horizontal-imgs">
                                                <div class="horizontal-img-cont5"><img src="assets/Group 1000004205 (1).png" alt=""/></div>
                                                <div class="horizontal-img-cont6"><img src="assets/Group 1000004206(1).png" alt=""/></div>
                                                <div class="horizontal-img-cont7"><img src="assets/Vector (2).png" alt=""/></div>
                                                <div class="horizontal-img-cont8"><img src="assets/Group 9.png" alt=""/></div>
                                            </div>
                                        </div>
                                        <div class="horizontal-item">
                                            <div class="horizontal-content">
                                                <div class="hori-f3">LETS CREATE</div>
                                                <div class="hori-f2">AND ENABLE YOU FOR YOUR CRAZIEST IDEA YET</div>
                                            </div>
                                            <div class="horizontal-btn2">
                                                <div class="button">
                                                    <div class="button-text">Create With Us</div>
                                                    <img class="button-arrow" src="assets/SVG.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </section>
    )
};

export default HorizontalSection;
