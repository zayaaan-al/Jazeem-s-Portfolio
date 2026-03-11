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
                                    Ready to bring your ideas to life through video?
                                </h2>

                                <p>
                                    Let’s create engaging visual content together.
                                    I’m available for freelance projects, collaborations,
                                    and full-time opportunities in video editing,
                                    content creation, and media production.
                                </p>

                                <div className="hero-btns">
                                    <a
                                        href="https://wa.me/918075289709"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="theme-btn"
                                    >
                                        Let's Talk <i><RiWhatsappLine size={16} /></i>
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