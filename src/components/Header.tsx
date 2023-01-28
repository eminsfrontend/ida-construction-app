import { myContainerForMainScreen } from "@/utils/tailwind-styles";
import Image from "next/image";
import mainImage from '../../public/img/mainimage.jpg'
import Button from "./Button";

export default function Header( ) {
    return (
        <header className="min-h-screen relative z-50">
            <div className={`${myContainerForMainScreen} z-40`}>
                <nav className="flex justify-between">
                    <div>logo</div>
                    <div>menu</div>
                </nav>
                <div className="h-full flex flex-col justify-center mt-14 lg:mt-40">
                    <h1 className="text-6xl max-w-2xl font-extrabold">Элитный ремонт квартир в Москве</h1>
                    <p className="font-medium max-w-lg my-16">Искусство ремонтных работ в исполнении профессионалов своего дела. Высочайший уровень взаимодействия для ценителей качества во всем.</p>
                    <Button title="Заказать ремонт" />
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