import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Reveal from "./Reveal";

export default function PhotoGalleryLayout({ imgs, text }) {
    const [data, setData] = useState({ img: '', i: 0 });

    const images = [...imgs];

    const viewImage = (img, i) => {
        setData({ img, i });
    }


    const closeImage = () => {
        setData({ img: '', i: 0 });
    };

    return (
        <>
            {data.img && (
                <div
                    className="w-full h-[calc(100vh-3.5rem)] bg-transparent backdrop-blur-sm fixed top-14 left-0 flex justify-center items-center overflow-hidden z-50  rounded-xl"
                    onClick={closeImage}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/` + data.img} className="max-h-[90%] max-w-[90%]  select-none" alt="" />
                </div>
            )}
            <ResponsiveMasonry className="mb-24" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="1rem">
                    {images.map((img, i) => (
                        <>
                            {i === 1 &&
                                <Reveal>
                                    <div className="h-max p-2 w-full order-first flex items-center justify-center serif text-tertiary sm:text-secondary" >{text}</div>
                                </Reveal>
                            }
                            <Reveal>

                                <img
                                    className=" rounded-lg cursor-pointer saturate-50 hover:saturate-100 transition duration-300 select-none"
                                    key={i}
                                    src={`${process.env.PUBLIC_URL}/images/` + img}
                                    alt=""
                                    onClick={() => viewImage(img, i)}
                                />
                            </Reveal>
                        </>
                    ))}
                </Masonry>
            </ResponsiveMasonry>

        </>
    );
}
