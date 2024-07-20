import Section from "./Section";
import SmallerContainer from "./SmallerContainer";

export default function AboutSection() {


    return (
        <>
            <Section className={""} sectionName={"About me"} >
                <SmallerContainer className={"h-max sm:grid sm:grid-cols-2 flex flex-col  gap-10 my-10 overflow-hidden"}>
                    <img src={`${process.env.PUBLIC_URL}/images/_DSC0366.jpg`} alt="" className="max-h-[300px] sm:min-h-[600px] sm:max-h-full scale-125 sm:scale-100 object-cover saturate-0 hover:saturate-100 ease-in-out transition duration-300"></img>
                    <span className=" h-full flex flex-col py-6 justify-between text-xl gap-4">
                        <h1 className="text-primary serif leading-[90%]">Alessio<br />Capecchi</h1>
                        <p>Hi, I am a passionate photographer based in Tuscany, Italy.</p>
                        <p>I fell in love with photography when I was 17, on a trip to England. Armed with just an iPhone, it felt great to be able to capture emotions beneath the images.</p>
                        <p>Later, I bought a real camera (Sony a6100), and here I am, traveling through Tuscany, finding emotions to capture.</p>
                    </span>
                </SmallerContainer>
            </Section>
        </>
    )
}