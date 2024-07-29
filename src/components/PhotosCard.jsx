import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhotosCard({ imageUrlCenter, imageUrlLeft, imageUrlRight, to }) {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false);
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
        duration: 0.175,
        ease: "easeInOut",
    }

    const link = () => {
        navigate(to)
    }

    return (
        <>
            <motion.div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={link}
                style={{ backgroundImage: `url(${imageUrlCenter})`, backgroundPosition: "center", backgroundSize: "cover" }}
                className="flex h-[500px] max-w-[800px] rounded-lg cursor-pointer mx-auto flex-col justify-center items-center gap-4  bg-cover bg-center bg-no-repeat relative"
            >
                <motion.div
                    variants={cardVariantsLeft}
                    initial="initial"
                    animate={isHover ? "hover" : "initial"}
                    transition={ttransition}
                    id="card-left"
                    style={{ backgroundImage: `url(${imageUrlLeft})`, backgroundPosition: "center", backgroundSize: "cover" }}

                    className=" size-full bg-black -z-10 absolute top-0 left-0 rounded-lg"
                />
                <motion.div
                    variants={cardVariantsRight}
                    initial="initial"
                    animate={isHover ? "hover" : "initial"}
                    transition={ttransition}
                    id="card-right"
                    style={{ backgroundImage: `url(${imageUrlRight})`, backgroundPosition: "center", backgroundSize: "cover" }}

                    className="size-full bg-red-500 -z-10 absolute top-0 left-0 rounded-lg"
                />
            </motion.div>
        </>
    )
}