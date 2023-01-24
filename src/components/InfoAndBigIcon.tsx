import { myContainerYExtended, myFlexRowLeadingNoReverse } from "@/utils/tailwind-styles"
import Image from "next/image"

interface InfoAndBigIconProps {
    title1: string
    desc1: string
    icon1: string
    alt1: string
    title2: string
    desc2: string
    icon2: string
    alt2: string
}

export default function InfoAndBigIcon({title1, desc1, icon1, alt1, title2, desc2, icon2, alt2}: InfoAndBigIconProps) {
    return (
        <section className={myContainerYExtended}>
            <div className={myFlexRowLeadingNoReverse}>
                <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0 relative">
                    <div className="z-50"> 
                        <h2 className="inline after:content-['_'] font-bold opacity-60">{title1}</h2>
                        <p className="inline font-medium">{desc1}</p>
                    </div>
                    <Image src={`/icons/${icon1}.svg`} alt={alt1} width={225} height={225} className="absolute left-0 top-1/4 -translate-y-[60%] z-40 opacity-[3%]" />
                </div>
                <div className="flex-1" />
            </div>
            <div className={myFlexRowLeadingNoReverse}>
                <div className="flex-1" />
                <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0 relative">
                    <div className="z-50">
                        <h2 className="inline after:content-['_'] font-bold opacity-60">{title2}</h2>
                        <p className="inline font-medium">{desc2}</p>
                    </div>
                    <Image src={`/icons/${icon2}.svg`} alt={alt2} width={225} height={225} className="absolute left-0 top-1/4 -translate-y-[60%] z-40 opacity-[3%]" />
                </div>
            </div>
        </section>
    )
}