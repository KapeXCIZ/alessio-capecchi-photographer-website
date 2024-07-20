import { ArrowUp } from "@phosphor-icons/react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import React, { useEffect, useRef, useState } from 'react'
import ContactMeSection from "../components/ContactMeSection";


export default function Layout({ children }) {
    const topRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText("alessio.capecchi.18@gmail.com");
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

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
                <Navbar copyContent={copyContent} />
                <div className="container min-h-screen">
                    {children}
                </div>
                <ContactMeSection copyContent={copyContent} />
                <Footer />
                <a href="#top" onClick={scrollToTop} className={`w-max fixed bottom-12 right-1/4 sm:left-1/2 sm:-translate-x-1/2 shadow-md  z-50  ${isVisible ? '' : 'hidden'}`}><ArrowUp size={32} color="white" className="bg-transparent backdrop-blur-md border border-dotted hover:bg-hover duration-100 ease-out " /></a>
            </div>

        </>
    )
}