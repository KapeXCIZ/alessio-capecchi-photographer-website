import PhotosCard from "../components/PhotosCard";

export default function GalleryPage() {
    return (
        <>
            <p className="text-tertiary md:text-secondary lg:text-[primary] serif tracking-wider font-[500] w-full text-center mt-4">Gallery</p>
            <PhotosCard position={"bottom"} title={"Mugello2024"} imageUrlCenter={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC3135-2.webp`} imageUrlRight={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC3186.webp`} imageUrlLeft={`${process.env.PUBLIC_URL}/images/mugello2024/_DSC2493.webp`} to={"/gallery/mugello2024"} />
        </>
    )
}