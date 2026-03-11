'use client'
import React from 'react'
import Link from 'next/link'
import {
  RiWhatsappFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiCircleFill,
  RiDownloadLine
} from '@remixicon/react'

import PartnersMarquee from './partnersMarquee'
import SlideUp from '@/utlits/animations/slideUp'

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">

          {/* PROFILE IMAGE */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">

                <img src="/images/about/profile.png" alt="Jazeem M" />

                <h2>Jazeem M</h2>

                <p>
                  Video Editor | Content Creator | Media Operator
                </p>

                <div className="about-social text-center">
                  <ul>

                    <li>
                      <a
                        href="https://wa.me/918075289709"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiWhatsappFill size={20} />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/jazeem_mhmd?igsh=MXAydmdmYmpqZmZleg%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiInstagramLine size={20} />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/jazeem-m/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiLinkedinFill size={20} />
                      </a>
                    </li>

                  </ul>
                </div>

              </div>
            </SlideUp>
          </div>


          {/* HERO CONTENT */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">

                <p>Hello There!</p>

                <h2>
                  I’m Jazeem, a passionate Video Editor and Media Operator
                  creating cinematic visuals, social media content,
                  and engaging digital stories.
                </h2>

                <p>
                  BCA Graduate – University of Calicut
                </p>

                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i><RiCircleFill size={14} /></i>
                      Available for Freelancing
                    </li>
                  </ul>
                </div>

                <div className="hero-btns">
                  <a
                    href="/JAZEEM_M.pdf"
                    download
                    className="theme-btn"
                  >
                    Download CV <i><RiDownloadLine size={16} /></i>
                  </a>
                </div>

              </div>
            </SlideUp>

            <SlideUp>
              <PartnersMarquee />
            </SlideUp>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero