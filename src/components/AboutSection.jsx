import Reveal from "./Reveal";
import Section from "./Section";
import SmallerContainer from "./SmallerContainer";

export default function AboutSection() {


    return (
        <>
            <Section className={"overflow-visible"} sectionName={"About me"} >
                <SmallerContainer className={" h-max sm:grid sm:grid-cols-2 flex flex-col gap-6  md:gap-10 my-10 overflow-visible  content-center items-center"}>
                    <Reveal className={"relative overflow-visible "}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/ImmagineProfiloOttimizzataNoBg.png`}
                            alt=""
                            className=" rounded-lg max-h-[400px] sm:min-h-[600px] sm:max-h-full scale-100 sm:scale-100 object-cover saturate-0 hover:saturate-100 ease-in-out transition duration-300"
                        />
                        <span className="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/3 bg-blue-500/30 -z-10 md:size-64 sm:size-48 size-32 rounded-full blur-2xl overflow-visible" />
                    </Reveal>
                    <span className=" h-full flex flex-col py-6 justify-between text-xl gap-4">
                        <Reveal>
                            <h1 className="text-secondary md:text-primary serif leading-[90%]">Alessio<br />Capecchi</h1>
                        </Reveal>
                        <Reveal>
                            <p>Hi, I am a passionate photographer based in Cortona, Italy.</p>
                        </Reveal>
                        <Reveal>
                            <p>I fell in love with photography when I was 17, on a trip to England. Armed with just an iPhone, it felt great to be able to capture emotions beneath the images.</p>
                        </Reveal>
                        <Reveal>
                            <p>Later, I bought a real camera (Sony a6100), and here I am, traveling through Tuscany, finding emotions to capture.</p>
                        </Reveal>
                    </span>
                </SmallerContainer>
            </Section>
        </>
    )
}