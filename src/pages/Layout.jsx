import { ArrowUp } from "@phosphor-icons/react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import React, { useEffect, useRef, useState } from 'react'
import ContactMeSection from "../components/ContactMeSection";
import Loading from "../components/common/Loading";

export default function Layout({ children }) {
    const topRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

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
        <div className="w-[100wdh] overflow-x-clip">
            <span ref={topRef} />
            <Navbar copyContent={copyContent} />
            {isLoading ? <Loading /> :
                <>
                    <div className="container min-h-screen ">
                        <div className="w-full" />
                        {children}
                    </div>
                    <ContactMeSection copyContent={copyContent} />
                </>
            }
            <Footer />
            <a href="#top" onClick={scrollToTop} className={`w-10 fixed bottom-12 right-12  shadow-md z-40   ${isVisible ? '' : 'hidden'}`}><ArrowUp size={32} color="white" className="rounded-md bg-transparent size-full p-1 backdrop-blur-md border border-dashed hover:bg-hover duration-100 ease-out " /></a>
        </div>
    )
}