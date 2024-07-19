import { ArrowUp } from "@phosphor-icons/react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import React, { useEffect, useRef, useState } from 'react'

export default function Layout({ children }) {
    const topRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    const scrollToTop = (e) => {
        e.preventDefault();
        topRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div ref={topRef}></div>
            <div className="bg-gradient-to-b from-[#171717] to-black">
                <Navbar />
                <div className="container ">
                    {children}
                </div>
                <Footer />
                <a href="#top" onClick={scrollToTop} className={`text-text-primary fixed bottom-10 left-1/2 z-50  ${isVisible ? '' : 'hidden'}`}><ArrowUp size={32} color="white" className="bg-transparent border border-dotted hover:bg-hover " /></a>
            </div>

        </>
    )
}