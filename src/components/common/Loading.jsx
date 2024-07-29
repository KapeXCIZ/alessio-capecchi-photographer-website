import { CircleLoader } from "react-spinners";

export default function Loading() {
    return (

        <div className="h-[calc(100vh-3.750rem)]  flex flex-col gap-4 justify-center items-center">
            <CircleLoader size={50} color="#e9e9e9" loading={true} />
        </div>

    );
}