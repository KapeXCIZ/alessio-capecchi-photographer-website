import { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Copy } from "@phosphor-icons/react";
import Reveal from "./Reveal";

export default function ContactMeSection({ copyContent }) {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            <Section className={"relative flex flex-col justify-center"} sectionName={"Contact me"}>
                <Reveal width="100%" className="flex justify-center items-center">
                    <motion.button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => { setIsHovered(false); setIsClicked(false); }}
                        onClickCapture={() => { setIsClicked(true); setIsHovered(false) }}
                        id="email"
                        className="hover:cursor-pointer  text-lg md:text-[2rem] w-max my-10 border border-dashed px-6 py-5 mx-auto rounded-lg *:hover:scale-95 *:transition *:duration-200 *:ease-in-out serif font-normal transition duration-150"
                        onClick={copyContent}
                    >
                        <p >
                            alessio.capecchi.18@gmail.com
                        </p>
                    </motion.button>
                </Reveal>
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
                        <Copy weight="fill" /><span>Copied</span>
                    </motion.p>

                </div>
            </Section>
        </>
    )
}