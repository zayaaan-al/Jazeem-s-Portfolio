import React from 'react'
import { RiVideoFill, RiCameraFill, RiImageFill, RiGalleryFill } from '@remixicon/react'
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
                                    <h2>Creative Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    <div className="row">

                        <Card
                            id={1}
                            icon={<RiVideoFill size={60} />}
                            title={"Video Production"}
                            description={"Professional video production including videography and editing for YouTube, social media, and promotional content."}
                        />

                        <Card
                            id={2}
                            icon={<RiCameraFill size={60} />}
                            title={"Photography"}
                            description={"Creative photography for events, brands, and social media content with professional composition and lighting."}
                        />

                        <Card
                            id={3}
                            icon={<RiImageFill size={60} />}
                            title={"Poster Design"}
                            description={"Eye-catching poster designs for marketing campaigns, events, and social media promotions."}
                        />

                        <Card
                            id={4}
                            icon={<RiGalleryFill size={60} />}
                            title={"YouTube Thumbnails"}
                            description={"High-converting YouTube thumbnails designed to attract viewers and increase click-through rates."}
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
        <div className="col-lg-3 col-md-6">
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