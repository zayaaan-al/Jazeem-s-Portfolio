import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">

                    {/* ABOUT IMAGE */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src="/images/about/profile.png" alt="Jazeem M" />
                            </div>
                        </SlideUp>
                    </div>

                    {/* ABOUT TEXT */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">

                                <h2>
                                    I’m Jazeem M — Video Editor & Creative Visual Artist
                                </h2>

                                <p>
                                    I create engaging visual content including video production,
                                    photography, poster designs, and YouTube thumbnails for
                                    brands and content creators.
                                </p>

                                <p>
                                    With 2+ years of experience and a BCA from the University
                                    of Calicut, I specialize in crafting creative visuals for
                                    social media, marketing campaigns, and digital platforms.
                                </p>

                                <p>
                                    I work with tools like DaVinci Resolve, CapCut, Photoshop,
                                    and Canva to deliver high-quality visual storytelling.
                                </p>

                                <div className="hero-btns">
                                    <a
                                        href="mailto:jazeemmhmd6@gmail.com"
                                        className="theme-btn"
                                    >
                                        Get In Touch <i><RiMailSendLine size={16} /></i>
                                    </a>
                                </div>

                            </div>
                        </SlideUp>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Summery