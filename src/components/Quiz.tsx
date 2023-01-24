import { hTitle, myContainerWideReverse, pDescription } from "@/utils/tailwind-styles";
import Image from "next/image";

export default function Quiz() {
    return (
        <section className={myContainerWideReverse}>
            <div className="flex-1 w-full relative">
                <Image src={`/img/project.jpg`} alt="quiz" width={900} height={800} />           
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-24 lg:py-0">
                <div className="flex flex-col items-start gap-y-6 px-4 lg:px-0 max-w-[450px]">
                    <h2 className={hTitle}>Поделитесь информацией о своем объекте</h2>
                    <div className="flex flex-col font-semibold text-sm">
                        <div className="flex gap-x-[10px] items-center px-5 py-[30px] ">
                            <Image src='/icons/quiz/apart.svg' alt="apart" width={24} height={24} />
                            <span>У меня квартира / апартаменты</span>
                        </div>
                        <div className="flex gap-x-[10px] items-center px-5 py-[30px] ">
                            <Image src='/icons/quiz/house.svg' alt="house" width={24} height={24} />
                            <span>Дом / особняк</span>
                        </div>
                        <div className="flex gap-x-[10px] items-center px-5 py-[30px] ">
                            <Image src='/icons/quiz/office.svg' alt="office" width={24} height={24} />
                            <span>Коммерческая недвижимость</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}