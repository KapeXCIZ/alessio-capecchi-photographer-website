import PhotoGalleryLayout from "../components/PhotoGalleryLayout";

export default function Mugello2024Page() {
    const imgs = [
        'mugello2024/_DSC2471.webp',
        'mugello2024/_DSC2504.webp',
        'mugello2024/_DSC2469.webp',
        'mugello2024/_DSC2484.webp',
        'mugello2024/_DSC2487.webp',
        'mugello2024/_DSC2493.webp',
        'mugello2024/_DSC2496.webp',
        'mugello2024/_DSC2499.webp',
        'mugello2024/_DSC2549.webp',
        'mugello2024/_DSC2559.webp',
        'mugello2024/_DSC3135.webp',
        'mugello2024/_DSC3159.webp',
        'mugello2024/_DSC3186.webp',
        'mugello2024/_DSC3135-2.webp',
        'mugello2024/_DSC3177.webp',
        'mugello2024/_DSC3181.webp',
        'mugello2024/_DSC3182.webp',
        'mugello2024/_DSC3171.webp',
    ]
    return (
        <>
            <PhotoGalleryLayout imgs={imgs} text={<p>Mugello 2024</p>} />
        </>
    )
}