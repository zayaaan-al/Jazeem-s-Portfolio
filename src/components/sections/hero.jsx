'use client'
import React from 'react'
import Image from 'next/image'
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

          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">

                <Image
  src="/images/about/main image.jpeg"
  width={400}
  height={400}
  style={{ width: "100%", height: "auto" }} // ✅ important
  alt="About"
/>

                <h2>Jazeem M</h2>

                <p>
                  Video Production | Photography | Poster Design | Thumbnails
                </p>

                <div className="about-social text-center">
                  <ul>

                    <li>
                      <a href="https://wa.me/918075289709" target="_blank">
                        <RiWhatsappFill size={20} />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/jazeem_mhmd" target="_blank">
                        <RiInstagramLine size={20} />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.linkedin.com/in/jazeem-m/" target="_blank">
                        <RiLinkedinFill size={20} />
                      </a>
                    </li>

                  </ul>
                </div>

              </div>
            </SlideUp>
          </div>


          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">

                <p>Hello There!</p>

                <h2>
                  I create engaging videos, photography, posters,
                  and thumbnails for brands and creators.
                </h2>

                <p>BCA Graduate — University of Calicut</p>

                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i><RiCircleFill size={14} /></i>
                      Available for Freelancing
                    </li>
                  </ul>
                </div>

                <div className="hero-btns">
                  <a href="/JAZEEM_M.pdf" download className="theme-btn">
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