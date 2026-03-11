import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">

                        {/* EXPERIENCE */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">

                                    <Card
                                        year={'May 2025 - Dec 2025'}
                                        title={'Media Operator'}
                                        institution={'High-Level Media Company | Doha, Qatar'}
                                    />

                                    <Card
                                        year={'Jul 2022 - Apr 2025'}
                                        title={'Video Editor / Media Designer'}
                                        institution={'ADSBEON | Kerala, India'}
                                    />

                                </div>
                            </div>
                        </div>

                        {/* EDUCATION */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Education</h2>
                                <div className="experience-list">

                                    <Card
                                        year={'2021 - 2024'}
                                        title={'Bachelor of Computer Applications (BCA)'}
                                        institution={'University of Calicut'}
                                    />

                                    <Card
                                        year={'2019 - 2021'}
                                        title={'Higher Secondary Education'}
                                        institution={'Kerala State Board'}
                                    />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company">{institution}</span>
                </div>
            </div>
        </SlideUp>
    )
}