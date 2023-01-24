import { ScrollContext } from "@/utils/scroll-observer"
import { myContainer } from "@/utils/tailwind-styles"
import { useContext, useRef } from "react"

interface BigScrollTextProps {
    textsArray: string[]
}

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

export default function BigScrollText({textsArray}: BigScrollTextProps) {

    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)
    const numOfPages = textsArray.length
    let progress = 0

    const {current: elContainer} = refContainer
    if (elContainer) {
        const {clientHeight, offsetTop} = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(
            clientHeight + halfH, 
            Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight
        
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages)) 
    }
    
    const texts = textsArray.map((value, index) => (
        <p key={index} className="inline after:content-['_'] font-medium text-4xl md:text-5xl lg:text-7xl opacity-60 transition-opacity ease-in duration-300" style={{opacity: opacityForBlock(progress, index)}}>
            {value}
        </p>
    ))

    return (
        <section className={myContainer}>
            <div ref={refContainer} className="px-4 md:px-36 lg:px-0">
                {texts}
            </div>
        </section>
    )
}