import AboutSection from "../components/AboutSection";
import MainHeader from "../components/MainHeader";
import Reveal from "../components/Reveal";

export default function HomePage() {

    return (
        <>
            <div className="h-full">
                <Reveal width="100%">
                    <MainHeader />
                </Reveal>
                <AboutSection />
            </div>
        </>
    )
}