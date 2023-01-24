import { hTitle, myContainer, myFlexRowLeading, myFlexRowTrailing, pDescription } from "@/utils/tailwind-styles"
import Image from "next/image"
import Button from "./Button"

export enum InfoAndImageDestination {
    leading, trailing
}

interface InfoAndImageProps {
    destination: InfoAndImageDestination
    title: string
    desc: string
    hasDevider: boolean
    subtitle?: string
    subdesc?: string
    img: string
    alt: string
    hasButton: boolean
    buttonTitle?: string
}

export default function InfoAndImage({destination, title, desc, hasDevider, subtitle, subdesc, img, alt, hasButton, buttonTitle}: InfoAndImageProps) {
    return (
        <section className={myContainer}>
            <div className={destination === InfoAndImageDestination.leading ? myFlexRowLeading : myFlexRowTrailing}>
                <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                    <h2 className={hTitle}>{title}</h2>
                    <p className={pDescription}>{desc}</p>
                    { hasDevider ? <div className="my-8 border-b border-b-white border-opacity-50" /> : null }
                    { subtitle ? <h3 className="font-bold">{subtitle}</h3> : null }
                    { subdesc ? <p className={pDescription}>{subdesc}</p> : null }
                    { hasButton ? <Button title={buttonTitle || ""} /> : null }
                </div>
                <div className="flex-1 relative">
                    <Image src={`/img/${img}.jpg`} alt={alt} width={2000} height={2000} />
                </div>
            </div>
        </section>
    )
}