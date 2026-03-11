import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link'

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
                                    I’m Jazeem M — Video Editor & Media Operator
                                </h2>

                                <p>
                                    I am a passionate video editor and media operator with over
                                    2 years of experience creating high-quality digital content,
                                    promotional videos, and social media edits. I enjoy turning
                                    creative ideas into engaging visual stories that capture
                                    attention and deliver impact.
                                </p>

                                <p>
                                    I hold a Bachelor of Computer Applications (BCA) from the
                                    University of Calicut and have professional experience
                                    working with brands and media teams. My expertise includes
                                    video editing, motion visuals, live event media operations,
                                    LED wall playback, and screen mapping.
                                </p>

                                <p>
                                    I work with industry tools such as DaVinci Resolve, CapCut,
                                    Photoshop, and Canva to produce content for YouTube,
                                    Instagram, marketing campaigns, and live productions.
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