import { CaretDoubleDown } from "@phosphor-icons/react";
import { motion } from 'framer-motion';
import { useState } from "react";


export default function SectionButton({ children, link, scrollToSection }) {
    const [isHovered, setIsHovered] = useState(false);

    const caretVariants = {
        normal: { translateY: "-0.3em" },
        hovered: { translateY: "0em" }
    };

    return (
        <motion.a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={link}
            onClick={scrollToSection}
            className="w-max mx-auto flex flex-col justify-center items-center gap-0"
        >
            <h1 className="text-secondary sm:text-primary  leading-tight tracking-tighter serif relative">
                {children}
            </h1>
            <motion.div
                className="p-0 m-0 -translate-y-3"
                variants={caretVariants}
                initial="normal"
                animate={isHovered ? "hovered" : "normal"}
                transition={{ duration: 0.15 }}
            >
                <CaretDoubleDown
                    weight="regular"
                    size={40}
                />
            </motion.div>
        </motion.a>
    );
}
