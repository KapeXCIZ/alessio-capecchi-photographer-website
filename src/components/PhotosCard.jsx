import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PhotosCard({ imageUrlCenter, imageUrlLeft, imageUrlRight, to, title, position }) {
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false)
    const cardVariantsLeft = {
        initial: {
            opacity: 0.5,
            x: 0,
            y: 0,
            rotate: 0,
        },
        hover: {
            opacity: 0.5,
            x: 200,
            y: 30,
            rotate: 10,
        },
    }
    const cardVariantsRight = {
        initial: {
            opacity: 0.5,
            x: 0,
            y: 0,
            rotate: 0,
        },
        hover: {
            opacity: 0.5,
            x: -200,
            y: 30,

            rotate: -10,
        },
    }
    const ttransition = {
        duration: 1.25,
        ease: "easeInOut",
    }

    const caretVariantsLeft = {
        initial: {
            rotate: 0,
        },
        hover: {
            rotate: 180
        },
    }

    const caretVariantsRight = {
        initial: {
            rotate: 0,
        },
        hover: {
            rotate: -180
        },
    }

    const link = () => {
        navigate(to)
    }

    return (
        <>
            <motion.div
                viewport={() => setIsLoaded(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={link}
                style={{ backgroundImage: `url(${imageUrlCenter})`, backgroundPosition: "center", backgroundSize: "cover" }}
                className="flex md:h-[500px] max-w-[800px] h-[70vh]  rounded-lg cursor-pointer mx-auto flex-col  justify-center items-center gap-4 mt-20 bg-cover bg-center bg-no-repeat relative "
            >

                <h1 className={`absolute text-[8vw] sm:text-tertiary md:text-secondary lg:text-primary serif shadow-md flex flex-row items-center ${position === "top" ? "top-6" : "bottom-6"}`}>
                    <motion.div
                        variants={caretVariantsLeft}
                        initial="initial"
                        animate={!isHovered ? "hover" : "initial"}
                    >
                        <CaretDoubleRight weight="light" />
                    </motion.div>
                    {title}
                    <motion.div
                        initial="initial"
                        animate={!isHovered ? "hover" : "initial"}
                        variants={caretVariantsRight}
                    >
                        <CaretDoubleLeft weight="light" />
                    </motion.div>
                </h1>
                <motion.div
                    variants={cardVariantsLeft}
                    initial="initial"
                    animate={!isLoaded ? "hover" : "initial"}
                    transition={ttransition}
                    id="card-left"
                    style={{ backgroundImage: `url(${imageUrlLeft})`, backgroundPosition: "center", backgroundSize: "cover" }}

                    className=" size-9/12 -z-10 absolute bottom-0 right-0 rounded-lg pointer-events-none"
                />
                <motion.div
                    variants={cardVariantsRight}
                    initial="initial"
                    animate={!isLoaded ? "hover" : "initial"}
                    transition={ttransition}
                    id="card-right"
                    style={{ backgroundImage: `url(${imageUrlRight})`, backgroundPosition: "center", backgroundSize: "cover" }}

                    className="size-9/12 -z-10 absolute top-0 left-0 rounded-lg pointer-events-none "
                />
            </motion.div>
        </>
    )
}