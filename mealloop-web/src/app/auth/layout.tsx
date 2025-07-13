import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            {/* <div className="z-10 absolute top-5 right-8 w-12 aspect-square flex justify-center items-center text-2xl
                cursor-pointer duration-200 active:scale-80"
            >
                <FontAwesomeIcon icon={faXmark} />
            </div> */}

            <Image
                src="https://i.pinimg.com/736x/d1/ed/66/d1ed662515e0e919b023d0d43ecaa924.jpg"
                alt="background"
                fill
                className="z-0 object-cover"
            />

            <div className="z-10 mb-10 flex justify-center items-center">
                { children }
            </div>
        </div>
    );
};