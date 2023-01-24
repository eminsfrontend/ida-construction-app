import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export interface CustomSliderSlide {
    id: number
    title: string
    desc: string
    image: string
    alt: string
}

interface CustomSliderProps {
    slides: CustomSliderSlide[]
}

export default function CustomSlider({slides}: CustomSliderProps) {

    const [currentSlide, setCurrentSlide] = useState<number>(1)
    const [slideWidth, setSlideWidth] = useState<number>(0)
    const [slideContainerWidth, setSlideContainerWidth] = useState<number>(0)
    const [leftMove, setLeftMove] = useState<number>(0)

    const refContainer = useRef<HTMLDivElement>(null)
    const slideContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setSlideWidth(slideContainer.current?.clientWidth || 0)
        setSlideContainerWidth(refContainer.current?.clientWidth || 0)
    }, [])
    
    const gap = (slideContainerWidth - (slideWidth * 3)) / 2

    function handleRightClick() {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(prev => prev + 1)
            setLeftMove(prev => prev - (slideWidth + gap))
        }
    }

    function handleLeftClick() {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1)
            setLeftMove(prev => prev + (slideWidth + gap))
        }
    }

   
    const slider = slides.map((item, index) => (
        <div key={item.id} ref={slideContainer} className={`
            ${item.id === currentSlide ? "opacity-100" : "opacity-0 lg:opacity-10"} 
            select-none flex flex-col items-center text-center gap-y-[14px] max-w-[300px]
            absolute top-[50%]
            transition-all ease-in duration-500`}
            style={{transform: `translateX(${((slideWidth + gap) * index) + leftMove + "px"}) translateY(-50%)`}}
        >
            <div className={`relative ${item.id === currentSlide ? "w-12 h-12" : "w-8 h-8"}`}>
                <Image src={`/icons/${item.image}.svg`} alt={item.alt} width={48} height={48} />
            </div>
            <h3 className={`font-semibold`}>{item.title}</h3>
            <p className={`font-medium ${item.id === currentSlide ? "text-[14px]" : "text-[12px]" }`}>{item.desc}</p>
        </div>
    ))

    const dots = Array(slides.length).fill('').map((_, index) => (
        <div key={index} className={`w-1 h-1 rounded-full bg-white ${index === currentSlide ? "bg-opacity-100" : "bg-opacity-60"}`} />
    ))

    return (
        <div ref={refContainer} className="relative w-full min-h-[350px] max-w-[358px] md:max-w-[750px] lg:max-w-[1024px] mx-auto overflow-hidden">
            {slider}
            <button onClick={handleRightClick} className='absolute right-0 w-12 h-full opacity-60 transition-transform ease-in duration-300 flex justify-end items-center md:hover:scale-150'>
                <Image src='/icons/next-button.svg' alt='next-button' width={48} height={48} />
            </button>
            <button onClick={handleLeftClick} className='absolute left-0 w-12 h-full opacity-60 transition-transform ease-in duration-300 flex justify-end items-center md:hover:scale-150'>
                <Image src='/icons/prev-button.svg' alt='prev-button' width={48} height={48} />
            </button>
            <div className="flex gap-x-2 absolute bottom-0 left-1/2 -translate-x-1/2">
                {dots}
            </div>
        </div>
    )
}
