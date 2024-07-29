import { motion } from "framer-motion"
import { useRef } from "react"



export default function Reveal({ children, width = "fit-content", className }) {
    const ref = useRef(null)



    return (
        <span
            ref={ref}
            style={{ position: "", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={
                    {
                        hidden: {
                            opacity: 0,
                            transform: "translateY(20%)",
                        },
                        visible: {
                            opacity: 1,
                            transform: "translateY(0%)",
                        },
                    }
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                    margin: "-150px",
                    once: true

                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0,
                }}

            >
                {children}
            </motion.div>
        </span>
    )
}