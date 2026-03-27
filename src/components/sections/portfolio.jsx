'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const categoryLinks = {
    "Video Production": "https://drive.google.com/drive/folders/1dnpeDyWmlK9WKA5QLSpkkD6K8aGNGscv?usp=drive_link",
    "Thumbnails": "https://drive.google.com/drive/folders/1Whm9SZOsmnroRKoVirRIrD6zmUiVt8_t?usp=sharing",
    "Poster Design": "https://drive.google.com/drive/folders/1SFJw7O7FUOECvstGnZLS2G45ZxoPEEY7?usp=sharing",
    "Photography": "https://drive.google.com/drive/folders/14_Y8w-Pt6NLG0wD59U-0LWhhnFW-LQ9r?usp=sharing",
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [activeVideo, setActiveVideo] = useState(null); // ✅ added

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })

    const filteredProjects = category === 'All'
        ? projectsData
        : projectsData.filter(image => image.category === category);

    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>
                                        Explore some of my creative work including video production, photography,
                                        poster design, and YouTube thumbnails crafted for brands and creators.
                                    </p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => (
                                <li
                                    key={id}
                                    onClick={() => handleCategoryClick(item)}
                                    className={item === category ? "current" : ""}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>

                    <div className="row project-masonry-active overflow-hidden">

                        {filteredProjects.map(({ category, id, src, title, video, link }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                video={video}
                                link={link}   // ✅ added
                                animationClass={animationClass}
                                setActiveVideo={setActiveVideo}
                            />
                        ))}
                    </div>

                    {/* ✅ VIEW MORE BUTTON */}
                    {category !== "All" && categoryLinks[category] && (
                        <div className="text-center mt-30">
                            <a
                                href={categoryLinks[category]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-btn"
                            >
                                View More
                            </a>
                        </div>
                    )}
                </div>

            </div>


            {/* 🎬 VIDEO MODAL */}
            {activeVideo && (
                <div className="video-modal" onClick={() => setActiveVideo(null)}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={activeVideo}
                            width="100%"
                            height="400"
                            allow="autoplay"
                        />
                        <button className="close-btn" onClick={() => setActiveVideo(null)}>✕</button>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Portfolio


// ================= CARD =================

const Card = ({ category, title, src, animationClass, id, video, setActiveVideo, link }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">

                    <div className="project-image">
                        <Image
                            width={383}
                            height={249}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            src={src}
                            alt={title}
                        />

                        <a
                            onClick={(e) => {
                                e.preventDefault();

                                if (video) {
                                    // 🎬 open modal
                                    setActiveVideo(video);
                                } else if (link) {
                                    // 🔗 redirect
                                    window.open(link, "_blank");
                                }
                            }}
                            className="details-btn"
                            style={{ cursor: "pointer" }}
                        >
                            <RiArrowRightUpLine />
                        </a>
                    </div>

                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                    </div>

                </div>
            </SlideUp>
        </div>
    )
}