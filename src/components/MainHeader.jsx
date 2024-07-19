import carImage from './images/_DSC3135-Migliorato-NR-2.jpg'
import { CaretUp } from "@phosphor-icons/react";


function HiddenMainHeaderComponent() {
    return (
        <>
            <div className="absolute w-full flex flex-col justify-end py-4 items-center pointer-events-none gap-0 h-32 -translate-y-32 z-10  bg-gradient-to-b from-transparent  to-[#101010] ">
                <CaretUp size={24} color="white"/>
                <h1 className="serif text-5xl tracking-tighter">Show more</h1>
            </div>
        </>
    )
}


export default function MainHeader() {


    return (
        <>
            <div className='flex justify-center flex-col items-center  my-10 sm:my-20 relative'>
                <h1 className='leading-none absolute -left-6 xl:left-20 top-1/4 sm:top-1/3 sm:text-[4rem] text-[3rem] serif letter tracking-tighter shadow w-70 sm:w-96 z-20'>MORE THAN JUST A PHOTO</h1>
                <div className='max-w-[850px]  relative w-full  h-[30rem] sm:h-[40rem] overflow-hidden'>
                    <img src={carImage} alt="logo" className='w-full h-full object-cover hover:scale-110 ease-out transition duration-300 z-20 hover:-z-20' />
                    <HiddenMainHeaderComponent  />
                </div>
            </div>
        </>
    )
}