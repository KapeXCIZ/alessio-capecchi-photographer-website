import { useRef } from "react";
import SectionButton from "./SectionButton";

export default function Section({ children, sectionName, className }) {
    const sectionRef = useRef(null)
    const sectionLink = "/#" + sectionName


    const scrollToSection = (e) => {
        e.preventDefault();
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div ref={sectionRef}></div>
            <SectionButton link={sectionLink} scrollToSection={scrollToSection}>
                {sectionName}
            </SectionButton>
            <section className={`mb-40 ${className}`} >
                {children}
            </section>
        </>
    )
}