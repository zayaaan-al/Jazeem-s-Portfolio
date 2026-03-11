import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">

                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Location</h2>
                            <p>Dubai</p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiPhoneLine size={20} /></i>
                            </div>
                            <h2>Phone</h2>
                            <p>
                                <a href="tel:+918075289709">
                                    +91 8075 289 709
                                </a>
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i><RiMailLine size={20} /></i>
                            </div>
                            <h2>Email</h2>
                            <p>
                                <a href="mailto:jazeemmhmd6@gmail.com">
                                    jazeemmhmd6@gmail.com
                                </a>
                            </p>
                        </div>
                    </SlideUp>

                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption