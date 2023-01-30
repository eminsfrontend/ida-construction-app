import { ScrollContext } from "@/utils/scroll-observer";
import Image from "next/image";
import { useContext } from "react";

export default function ScrollTop() {
    const { scrollY } = useContext(ScrollContext)

    return (
        <a href="#" className={`w-[50px] h-[50px] fixed bottom-4 right-4 bg-white bg-opacity-10 justify-center items-center ${scrollY > 900 ? "flex" : "hidden"}`} style={{zIndex: 9999}}>
            <Image src='/icons/up.svg' alt='scroll top' width={24} height={24} className="opacity-50" />
        </a>
    )
}