import PhotosCard from "../components/PhotosCard";

export default function PhotosPage() {
    return (
        <>
            <PhotosCard position={"bottom"} title={"Mugello2024"} imageUrlCenter={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC3135-2.webp`} imageUrlRight={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC3186.webp`} imageUrlLeft={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC2493.webp`} to={"/photos/mugello2024"} />
        </>
    )
}