import { Copyright, Sparkle } from "@phosphor-icons/react"


export default function Footer() {



    return (
        <>
            <div className="w-full flex justify-between flex-col gap-3 sm:gap-0 sm:flex-row py-4 px-10">
                <div className=" flex flex-row gap-1 items-center font-light">
                    <h1>ALESSIO CAPECCHI</h1>
                    <Copyright size={16} color="white" />
                    <h1>2024</h1>
                </div>
                <div className="flex flex-row gap-1 items-center font-light">
                    <h1>DESIGN & DEV</h1>
                    <Sparkle size={16} color="white" weight="fill"/>
                    <h1>ALESSIO CAPECCHI</h1>
                </div>
            </div>
        </>
    )
}