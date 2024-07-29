import { Aperture } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Navbar({ copyContent }) {



    return (
        <>

            <div className="container md:no-container flex w-full h-14 bg-transparent backdrop-blur-md sticky z-50 top-0 px-10 gap-3 items-center justify-between serif">
                <Link to={'/photos'} className="flex flex-row items-center gap-1"><Aperture size={28} weight="regular" className="hover:rotate-180 transition duration-500 ease-in-out" />Photographs</Link>
                <Link to={'/'} className="text-2xl tracking-tighter mx-0 px-0  hover:tracking-wider md:absolute md:left-1/2  duration-300 ease-in-out md:-translate-x-1/2 ">Alessio</Link>
                <p id="email" className="hover:cursor-pointer hover:drop-shadow-[0_0_10px_gray] hidden md:block trasition duration-500" onClick={copyContent}>alessio.capecchi.18@gmail.com</p>
            </div>
        </>
    )
}