import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div className="h-[calc(100vh-3.750rem)]  flex flex-col gap-4 justify-center items-center">
            <h1 className="text-9xl serif">404</h1>
            <h1 className="serif">Page not found</h1>
            <Link to={'/'} className="border border-dotted hover:bg-[#202020]  px-4 py-2 ">Back on track</Link>

        </div>
    )
}