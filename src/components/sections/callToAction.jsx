import React from 'react'
import { RiWhatsappLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">

                                <h2>
                                    Let’s Create Something Amazing Together
                                </h2>

                                <p>
                                    I’m available for freelance projects and collaborations in
                                    video production, photography, poster design, and YouTube
                                    thumbnail creation. Let’s work together to create engaging
                                    visual content for your brand, social media, or business.
                                </p>

                                <div className="hero-btns">
                                    <a
                                        href="https://wa.me/918075289709"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="theme-btn"
                                    >
                                        Contact on WhatsApp <i><RiWhatsappLine size={16} /></i>
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

export default CallToAction