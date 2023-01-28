import { hTitle, myContainerWide, myContainerWideReverse, pDescription } from "@/utils/tailwind-styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Button from "./Button";
import { reverse } from "dns";

interface SliderAndInfoProps {
    reverse: boolean
    title: string
    desc: string
    images: {id: number, image: string, alt: string}[]
    hasButton: boolean
    anchor?: string
}

export default function SliderAndInfo({images, title, desc, reverse, hasButton, anchor}: SliderAndInfoProps) {

    const slides = images.map(item => (
        <SwiperSlide key={item.id} className="relative">
            <Image src={`/img/${item.alt}.jpg`} alt={item.alt} width={900} height={800} />
        </SwiperSlide>
    ))
    
    return (
        <section id={anchor} className={reverse ? myContainerWideReverse : myContainerWide}>
            
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    loop
                    modules={[Autoplay]}
                    className="flex-1 w-full cursor-grab"
                >
                    {slides}
                </Swiper>
            <div className="flex-1 flex flex-col items-center justify-center py-24 lg:py-0">
                <div className="flex flex-col gap-y-6 px-4 lg:px-0 max-w-[450px]">
                    <div className="text-xs opacity-60">Наши проекты</div>
                    <h2 className={hTitle}>{title}</h2>
                    <p className={pDescription}>{desc}</p>
                    { hasButton ? <Button title="Заказать ремонт" /> : null}
                </div>
            </div>
        </section>
    )
}