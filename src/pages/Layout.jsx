import Navbar from "../components/common/Navbar";

export default function Layout({ children }) {

    return (
        <>
            <div>
                <Navbar />
                {children}
            </div>

        </>
    )
}