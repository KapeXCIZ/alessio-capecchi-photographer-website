import { CaretUp } from "@phosphor-icons/react";
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function HiddenMainHeaderComponent({isHovered}) {    
    return (
        <>
            <motion.div 
            className="absolute w-full flex flex-col justify-end py-4 items-center pointer-events-none gap-0 h-32 -translate-y-32 z-10  bg-gradient-to-b from-transparent  to-[#101010] "
            variants = { {hovered: {translateY: "-8em", opacity: "100%"}, normal: {translateY: "-6em", opacity: "0%"}}}
            initial="normal"
            animate={isHovered ? "hovered" : "normal"}
            transition={{ease: "easeOut", duration: 0.15}}
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

    function handleClick() {
        navigate("speed-track")
    }

    return (
        <>
            <div className='flex justify-center flex-col items-center my-10 sm:my-20 relative min-h-[75dvh]'>
                <h1 className='leading-none absolute -left-6 xl:left-20 top-1/4 sm:top-1/3 sm:text-primary text-secondary serif letter tracking-tighter shadow w-70 sm:w-96 z-20'>MORE THAN JUST A PHOTO</h1>
                <div className='max-w-[850px] w-full relative h-[30rem] sm:h-[40rem] overflow-hidden'>
                    <motion.span
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='cursor-pointer' onClick={handleClick}
                    >
                        <img src={`${process.env.PUBLIC_URL}/images/_DSC3135-Migliorato-NR-2.jpg`} alt="" className='w-full h-full object-cover hover:scale-110 ease-out transition duration-300 z-20 hover:-z-20' />
                        <HiddenMainHeaderComponent isHovered={isHovered} />
                    </motion.span>
                </div>
            </div>
        </>
    )
}
