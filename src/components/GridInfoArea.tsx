import { myContainer } from "@/utils/tailwind-styles";
import Image from "next/image";

interface GridInfoAreaProps {
    gridItems: {id: number, icon: string, alt: string, title: string}[]
}

export default function GridInfoArea({gridItems}: GridInfoAreaProps) {

    const item = gridItems.map(i => (
        <div key={i.id} className="bg-[#191919] h-20 flex justify-center items-center">
            <div className="flex gap-x-[10px] relative items-center">
                <Image src={`/icons/gridIcons/${i.icon}.svg`} alt={i.alt} width={24} height={24} />
                <span className="font-semibold text-sm">{i.title}</span>
            </div>
        </div>
    ))
    
    return (
        <section className={myContainer}>
            <div className="md:px-32 lg:px-0 grid grid-cols-1 grid-rows-6 lg:grid-cols-customGrid lg:grid-rows-2 gap-[6px]">
                {item}
            </div>
        </section>
    )
}