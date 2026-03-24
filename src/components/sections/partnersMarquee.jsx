import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>I Worked With</h2>

            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">

                        <Marquee>

                            <a href="https://youtube.com/@channel1" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 1.jpeg" alt="Client 1" />
                            </a>

                            <a href="https://youtube.com/@channel2" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 2.jpeg" alt="Client 2" />
                            </a>

                            <a href="https://youtube.com/@channel3" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 3.jpeg" alt="Client 3" />
                            </a>

                            <a href="https://youtube.com/@channel4" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 4.jpeg" alt="Client 4" />
                            </a>

                            <a href="https://youtube.com/@channel5" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 5.jpeg" alt="Client 5" />
                            </a>

                            <a href="https://youtube.com/@channel6" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 6.jpeg" alt="Client 6" />
                            </a>

                        </Marquee>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee