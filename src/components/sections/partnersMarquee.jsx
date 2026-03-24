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

                            <a href="https://www.youtube.com/@ajmalkhanonline" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 6.jpeg" alt="Client 6" />
                            </a>

                            <a href="https://www.youtube.com/@Nihalkkaaaa" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 5.jpeg" alt="Client 5" />
                            </a>

                            <a href="https://www.youtube.com/@Supervaava" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 1.jpeg" alt="Client 1" />
                            </a>

                             <a href="https://www.youtube.com/@backpackerarunima2466" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 3.jpeg" alt="Client 3" />
                            </a>

                            <a href="https://www.youtube.com/@basilvlogss" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 2.jpeg" alt="Client 2" />
                            </a>

                            <a href="https://www.youtube.com/@nabeel_ahammed.k" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 7.jpeg" alt="Client 4" />
                            </a>
                           

                            <a href="https://www.youtube.com/@arxhuvlogs" target="_blank" rel="noopener noreferrer">
                                <img src="/images/client-logos/slide 4.jpeg" alt="Client 4" />
                            </a>

                            

                            

                        </Marquee>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee