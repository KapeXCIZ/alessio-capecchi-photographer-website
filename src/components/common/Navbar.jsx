import { Aperture } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText("alessio.capecchi.18@gmail.com");
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    return (
        <>
            <div className="flex w-full py-4 bg-transparent backdrop-blur-md sticky z-50 top-0 px-10 gap-3  justify-between serif">
                <p className="flex flex-row items-center gap-1"><Aperture size={28} weight="regular" className="hidden sm:block"/> Alessio Capecchi Photographer</p>
                <Link to={'/'} className="text-2xl tracking-tighter hover:tracking-wider  ">Alessio</Link>
                <p id="email" className="hover:cursor-pointer hover:drop-shadow-[0_0_2px_gray] hidden md:block" onClick={copyContent}>alessio.capecchi.18@gmail.com</p>
            </div>
        </>
    )
}