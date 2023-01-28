import Image from "next/image";
import logo from "../../public/icons/ida-logo-menu.svg"

export default function PopupMenu({handler}) {
    return (
        <div className="flex flex-col py-10 justify-between items-center fixed w-full h-[100%] bg-[#191919] z-50">
            <Image src={logo} alt="ida-construction-logo-for-menu" />
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-4 text-center">
                <a onClick={handler} href="#about" className="py-5">О нас</a>
                <a onClick={handler} href="#design" className="py-5">Дизайн помещений</a>
                <a onClick={handler} href="#portfolio" className="py-5">Наши проекты</a>
                <a onClick={handler} href="#price" className="py-5">Цены</a>
                <a onClick={handler} href="#contacts" className="py-5">Контакты</a>
            </div>
            <button onClick={handler} className='text-xs opacity-60 py-2 px-4'>Закрыть меню</button>
        </div>
    )
}