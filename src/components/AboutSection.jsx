import Reveal from "./Reveal";
import Section from "./Section";
import SmallerContainer from "./SmallerContainer";

export default function AboutSection() {


    return (
        <>
            <Section className={"overflow-visible"} sectionName={"About me"} >
                <SmallerContainer className={" h-max md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col gap-6  md:gap-10 my-10 overflow-visible  content-center items-center"}>
                    <Reveal className={"relative overflow-visible "}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/1-opt.png`}
                            alt="Alessio Capecchi - Fotografo professionista in Toscana"
                            className=" rounded-lg max-h-[400px] sm:min-h-[600px] sm:max-h-[10rem] scale-100 sm:scale-100 object-cover md:saturate-0 hover:saturate-100 ease-in-out transition duration-300 flex justify-center items-center hover:mix-blend-normal md:mix-blend-hard-light"
                        />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 bg-red-500/30 -z-10 md:size-96 size-64  rounded-full blur-2xl overflow-visible" />
                    </Reveal>
                    <span className=" h-full flex flex-col py-6 justify-between lg:col-span-2 text-xl gap-4">
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