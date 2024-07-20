import { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Copy } from "@phosphor-icons/react";

export default function ContactMeSection({ copyContent }) {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            <Section className={"relative flex flex-col justify-center"} sectionName={"Contact me"}>
                <motion.button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => { setIsHovered(false); setIsClicked(false); }}
                    onClickCapture={() => { setIsClicked(true); setIsHovered(false) }}
                    id="email"
                    className="hover:cursor-pointer text-lg md:text-tertiary hover:bg-hover w-max my-10 border border-dashed px-4 py-2 mx-auto serif font-normal"
                    onClick={copyContent}
                >
                    alessio.capecchi.18@gmail.com
                </motion.button>
                <div className="w-full flex justify-center h-10">
                    <motion.div
                        variants={{ base: { display: "none" }, variant1: { display: "flex" } }}
                        initial={"base"}
                        animate={isHovered ? "variant1" : "base"}
                        transition={{ duration: 0 }}

                        className="gap-1 justify-center items-center"
                    >
                        <Copy /><p>Click to copy</p>
                    </motion.div>
                    <motion.p
                        variants={{ base: { display: "none" }, variant1: { display: "flex" } }}
                        initial={"base"}
                        animate={isClicked ? "variant1" : "base"}
                        transition={{ duration: 0 }}
                        className="gap-1 justify-center items-center"
                    >
                        <Copy weight="fill" /><p>Copied</p>
                    </motion.p>

                </div>
            </Section>
        </>
    )
}