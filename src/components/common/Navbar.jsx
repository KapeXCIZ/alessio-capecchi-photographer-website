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
            <div className="flex w-full py-4 bg-transparent backdrop-blur-md sticky top-0 px-10 gap-3  justify-between serif">
                <p>Alessio Capecchi Photographer</p>
                <Link to={'/'} className="text-xl tracking-tighter hover:tracking-wider  ">Alessio</Link>
                <p id="email" className="hover:cursor-pointer hover:drop-shadow-[0_0_4px_white]" onClick={copyContent}>alessio.capecchi.18@gmail.com</p>
            </div>
        </>
    )
}