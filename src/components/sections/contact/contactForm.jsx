'use client'
import React from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.success("Message sent successfully! 🚀")
        e.target.reset()
    }

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">

                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name"
                                        className="form-control"
                                        placeholder="Steve Milner"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email"
                                        className="form-control"
                                        placeholder="hello@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Write your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Message <i><RiMailLine size={15} /></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>

                    <ToastContainer position="top-right" autoClose={3000} />

                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm