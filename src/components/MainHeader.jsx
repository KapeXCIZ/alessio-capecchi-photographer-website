import { CaretUp } from "@phosphor-icons/react";
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Reveal from "./Reveal";
import SmallerContainer from "./SmallerContainer";


function HiddenMainHeaderComponent({ isHovered }) {
    return (
        <>
            <motion.div
                className="absolute w-full flex flex-col justify-end py-4 items-center pointer-events-none gap-0 h-32 -translate-y-32 z-10  bg-gradient-to-b from-transparent  to-[#000000] "
                variants={{ hovered: { translateY: "-8em", opacity: "100%" }, normal: { translateY: "-6em", opacity: "0%" } }}
                initial="normal"
                animate={isHovered ? "hovered" : "normal"}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <CaretUp size={24} color="white" />
                <h1 className="serif text-tertiary tracking-tighter">Show more</h1>
            </motion.div>
        </>
    )
}


export default function MainHeader() {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)




    window.addEventListener('resize', () => { window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false) })

    function handleClick() {
        navigate("gallery")
    }

    return (
        <>
            <div className='flex justify-center flex-col items-center  relative min-h-[90vh]'>
                <h1 className='leading-[0.88em] absolute -left-6 xl:left-20 top-[30%] sm:top-[18%] sm:text-primary text-tertiary serif letter font-[300] tracking-tighter shadow-lg w-70 sm:w-96 z-20'><Reveal>ALESSIO CAPECCHI PHOTOGRAPHER</Reveal></h1>
                <SmallerContainer className=' bg-loading relative h-[30rem] sm:h-[45rem] overflow-hidden rounded-lg '>
                    <motion.span
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='cursor-pointer' onClick={handleClick}
                    >
                        <img src={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC3135-2.webp`} alt="" className='w-full h-full  object-cover hover:scale-110 ease-out transition duration-300 z-20 hover:-z-20' />
                        <HiddenMainHeaderComponent isHovered={isHovered || isMobile} />
                    </motion.span>
                </SmallerContainer>
            </div>
        </>
    )
}
