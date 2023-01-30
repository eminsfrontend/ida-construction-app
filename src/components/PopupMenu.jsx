import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/icons/ida-logo-menu.svg"

export default function PopupMenu({handler, popupState}) {

    useEffect(() => {
        popupState ? document.body.style.overflow = 'hidden' : ''
        return () => document.body.style.overflow = 'unset'
    }, [popupState, handler])
    
    return (
        <div className="flex flex-col py-10 justify-between items-center fixed w-full h-[100%] bg-[#191919] z-50">
            <Image src={logo} alt="ida-construction-logo-for-menu" />
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-4 lg:gap-x-8 text-center md:text-2xl lg:text-4xl xl:text-[48px]">
                <a onClick={handler} href="#about" className="py-5 lg:hover:px-12 lg:hover:scale-150 lg:hover:opacity-100 lg:hover:bg-[#191919] lg:opacity-60 transition-all duration-300 ease-in">О нас</a>
                <a onClick={handler} href="#design" className="py-5 lg:hover:px-12 lg:hover:scale-150 lg:hover:opacity-100 lg:hover:bg-[#191919] lg:opacity-60 transition-all duration-300 ease-in">Дизайн помещений</a>
                <a onClick={handler} href="#portfolio" className="py-5 lg:hover:px-12 lg:hover:scale-150 lg:hover:opacity-100 lg:hover:bg-[#191919] lg:opacity-60 transition-all duration-300 ease-in">Наши проекты</a>
                <a onClick={handler} href="#price" className="py-5 lg:hover:px-12 lg:hover:scale-150 lg:hover:opacity-100 lg:hover:bg-[#191919] lg:opacity-60 transition-all duration-300 ease-in">Цены</a>
                <a onClick={handler} href="#contacts" className="py-5 lg:hover:px-12 lg:hover:scale-150 lg:hover:opacity-100 lg:hover:bg-[#191919] lg:opacity-60 transition-all duration-300 ease-in">Контакты</a>
            </div>
            <button onClick={handler} className='text-xs lg:text-base opacity-60 py-2 px-4 hover:opacity-100'>Закрыть меню</button>
        </div>
    )
}