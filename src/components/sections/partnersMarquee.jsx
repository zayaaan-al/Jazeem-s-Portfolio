import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2> I Worked With</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/slide 1.jpeg"} alt="" />
                            <img src={"/images/client-logos/slide 2.jpeg"} alt="" />
                            <img src={"/images/client-logos/slide 3.jpeg"} alt="" />
                            <img src={"/images/client-logos/slide 4.jpeg"} alt="" />
                            <img src={"/images/client-logos/slide 5.jpeg"} alt="" />
                            <img src={"/images/client-logos/slide 6.jpeg"} alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee