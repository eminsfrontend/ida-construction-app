import { myContainerForMainScreen } from "@/utils/tailwind-styles";
import Image from "next/image";
import mainImage from '../../public/img/mainimage.jpg'
import ida from "../../public/icons/ida3.svg"
import Button from "./Button";
import { useState } from "react";
import PopupMenu from "./PopupMenu";

interface HeaderProps {
    title: string
    desc: string
    buttonTitle: string
}

export default function Header({title, desc, buttonTitle}: HeaderProps) {

    
  const [popupMenu, setPopupMenu] = useState<boolean>(false)

  function handlePopupMenu() {
    setPopupMenu(prev => !prev)
  }

    return (
        <header className="min-h-screen relative z-50">
            { popupMenu ? <PopupMenu handler={handlePopupMenu} /> : null }
            <div className={`${myContainerForMainScreen} z-40`}>
                <nav className="flex justify-between items-center">
                    <Image src={ida} alt='ida-logo' />
                    <nav className="flex gap-x-24">
                        <a href="tel:+74952011111" className="font-semibold hidden md:block font-monts hover:opacity-60">+ 7 495 100 20 40</a>
                        <button onClick={handlePopupMenu} className="relative hover:opacity-60">
                            <Image src="/icons/burger.svg" alt="menu" width={24} height={24} />
                        </button>
                    </nav>
                </nav>
                <div className="h-full flex flex-col justify-center mt-14 lg:mt-40">
                    <h1 className="text-6xl max-w-2xl font-extrabold">{title}</h1>
                    <p className="font-medium max-w-lg my-16">{desc}</p>
                    <Button title={buttonTitle} />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="relative w-full h-full">
                    <Image src={mainImage} alt="main-image" fill className="opacity-40" objectFit="cover" style={{objectPosition: "left top"}} />
                </div>
            </div>
        </header>
    )
}