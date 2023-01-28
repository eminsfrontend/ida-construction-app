import { myContainer, myFlexRowLeadingNoReverse } from "@/utils/tailwind-styles";
import Image from "next/image";

interface FooterProps {
    anchor?: string
}

export default function Footer({anchor}: FooterProps) {
    return (
        <footer id={anchor} className={`bg-[#191919]`}>
            <div className={`${myContainer}`}>
                <div className={`${myFlexRowLeadingNoReverse} justify-between`}>
                    <Image src="/icons/logo.svg" alt="logo" width={158} height={38} />
                    <nav className="flex font-medium text-sm opacity-30 gap-x-10">
                        <a href="#about" className="hover:opacity-60 transition-all duration-300 ease-in">О нас</a>
                        <a href="#about" className="hover:opacity-60 transition-all duration-300 ease-in">Дизайн</a>
                        <a href="#about" className="hover:opacity-60 transition-all duration-300 ease-in">Проекты</a>
                        <a href="#about" className="hover:opacity-60 transition-all duration-300 ease-in">Цены</a>
                    </nav>
                </div>
                <div className="w-full border-b border-b-white border-opacity-10 mt-9"></div>
                <div className={`${myFlexRowLeadingNoReverse} pt-20`}>
                    <div className="flex-1 flex flex-col gap-y-8">
                        <span className="font-medium">ООО “Строй Групп”</span>
                        <div className="flex flex-col gap-y-[5px]">
                            <span className="font-medium">Москва, 1-й Магистральный тупик, 5А, офис 108</span>
                            <a target="_blank" href="https://yandex.ru/maps/213/moscow/?ll=37.535459%2C55.761332&mode=poi&poi%5Bpoint%5D=37.532117%2C55.765945&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1053773682&z=15.55" className="font-medium text-sm opacity-60 underline underline-offset-4">Открыть на Яндекс Карте</a>
                        </div>
                        <span className="font-medium">Мы работаем с 9-00 до 19-00 по МСК</span>
                        <div className="flex flex-col md:flerow gap-y-6 gap-x-10">
                            <div className="flex items-center gap-x-[10px]">
                                <Image src='/icons/phonefooter.svg' alt='phone' width={24} height={24} />
                                <a href="tel:+71991001010" className="font-monts font-semibold">+7 (495) 202 11 19</a>
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <Image src='/icons/whatsapp.svg' alt='phone' width={24} height={24} />
                                <span className="font-monts font-semibold">+7 902 815 23 43</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-[300px] bg-slate-400"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}