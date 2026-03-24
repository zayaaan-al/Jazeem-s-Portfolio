'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '@/utlits/fackData/menuList'
import Image from 'next/image'

const Header = () => {
    const pathName = usePathname()
    const [isSticky, setisSticky] = useState(false)

    useEffect(() => {
        const navbar_collapse = document.querySelector(".navbar-collapse")
        if (navbar_collapse) {
            navbar_collapse.classList.remove("show")
        }
    }, [pathName])

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        } else {
            setisSticky(false)
        }
    }

    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">

                        {/* LOGO */}
                        <div className="logo-outer">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        width={180}
                                        height={50}
                                        sizes="100vw"
                                        src="/images/LOGO (1).png"
                                        alt="Logo"
                                        title="Logo"
                                          priority
                                        
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* NAVIGATION */}
                        <div className="nav-outer clearfix mx-auto">
                            <nav className="main-menu navbar-expand-lg">

                                <div className="navbar-header">

                                    {/* Mobile Logo */}
                                    <div className="mobile-logo">
                                        <Link href="/">
                                            <Image
                                                width={75}
                                                height={25}
                                                sizes="100vw"
                                                src="/images/LOGO (1).png"
                                                alt="Logo"
                                                title="Logo"
                                                  priority
                                            />
                                        </Link>
                                    </div>

                                    {/* Mobile Toggle */}
                                    <button
                                        type="button"
                                        className="navbar-toggle"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse"
                                    >
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                </div>

                                <div className="navbar-collapse collapse">

                                    {/* MENU ITEMS */}
                                    <ul className="navigation onepage clearfix">
                                        {menuList.map(({ id, label, path }) => (
                                            <li key={id}>
                                                <Link href={path} className="nav-link-click">
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* MOBILE HIRE ME BUTTON */}
                                    <div className="mobile-hire-btn text-center mt-3 d-lg-none">
    <a
        href="https://wa.me/918075289709"
        target="_blank"
        rel="noopener noreferrer"
        className="theme-btn"
    >
        Hire Me <RiShakeHandsLine size={15} />
    </a>
</div>

                                </div>
                            </nav>
                        </div>

                        {/* DESKTOP HIRE ME BUTTON */}
                        <div className="menu-btns">
                            <a
                                href="https://wa.me/918075289709"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-btn"
                            >
                                Hire Me <RiShakeHandsLine size={15} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header