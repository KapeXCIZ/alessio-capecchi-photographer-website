import AboutSection from "../components/AboutSection";
import MainHeader from "../components/MainHeader";

export default function HomePage(){
    
    return (
        <>
            <div className="h-full">
                <MainHeader />
                <AboutSection />
            </div>
        </>
    )
}