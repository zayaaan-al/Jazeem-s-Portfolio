import React from 'react'
import { RiVideoFill, RiMovie2Fill, RiCameraFill } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Video Production Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    <div className="row">
                        <Card
                            id={1}
                            icon={<RiVideoFill size={60} />}
                            title={"Video Editing"}
                            description={"Professional video editing for YouTube, social media, and promotional content using tools like DaVinci Resolve and CapCut."}
                        />

                        <Card
                            id={2}
                            icon={<RiMovie2Fill size={60} />}
                            title={"Content Creation"}
                            description={"Creating engaging short-form and long-form content for brands, influencers, and digital marketing campaigns."}
                        />

                        <Card
                            id={3}
                            icon={<RiCameraFill size={60} />}
                            title={"Live Event Media"}
                            description={"LED wall operation, live playback, screen mapping, and media management for large-scale live events and productions."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}