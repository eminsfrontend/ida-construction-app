import { hTitle, myContainerWideReverse } from "@/utils/tailwind-styles";
import Image from "next/image";
import { useState } from "react";

export default function Quiz() {

    const [progress, setProgress] = useState<number >(1)
    const [q, setQ] = useState({
        firstQ: "",
        secondQ: "",
        thirdQ: "",
    })

    function setQuestion(name: string) {
        if (progress === 1) {
            setQ({...q, firstQ: name})
            return
        }
        if (progress === 2) {
            setQ({...q, secondQ: name})
            return
        }
        if (progress === 3) {
            setQ({...q, thirdQ: name})
            return
        }
    }

    function handleChoose(name: string) {
        setProgress(prev => prev === 4 ? prev : prev + 1)
        setQuestion(name)
    }

    function handleBack() {
        setProgress(prev => prev - 1)
    }



    return (
        <section className={myContainerWideReverse}>
            <div className="flex-1 w-full relative">
                <Image src={`/img/project.jpg`} alt="quiz" width={900} height={800} />           
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-24 lg:py-0 relative">
                { 
                    progress === 1 
                    ?
                    <div className={`flex flex-col items-start gap-y-6 px-4 lg:px-0 max-w-[450px] ${progress === 1 ? "opacity-100" : "opacity-0"}`}>
                        <h2 className={hTitle}>Поделитесь информацией о своем объекте</h2>
                        <div className="flex flex-col gap-y-2 font-semibold text-sm">
                            <button name="У меня квартира / апартаменты" onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <Image src='/icons/quiz/apart.svg' alt="apart" width={24} height={24} />
                                <span>У меня квартира / апартаменты</span>
                            </button>
                            <button name="Дом / особняк" onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <Image src='/icons/quiz/house.svg' alt="house" width={24} height={24} />
                                <span>Дом / особняк</span>
                            </button>
                            <button name="Коммерческая недвижимость" onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <Image src='/icons/quiz/office.svg' alt="office" width={24} height={24} />
                                <span>Коммерческая недвижимость</span>
                            </button>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    progress === 2
                    ?
                    <div className="flex flex-col items-start gap-y-6 px-4 lg:px-0 max-w-[450px]">
                        <h2 className={hTitle}>Нужен ли вам дизайн-проект?</h2>
                        <div className="flex flex-col gap-y-2 font-semibold text-sm">
                            <button name="Да" onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <span>Да</span>
                            </button>
                            <button name="Нет" onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <span>Нет</span>
                            </button>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    progress === 3
                    ?
                    <div className="flex flex-col items-start gap-y-6 px-4 lg:px-0 max-w-[450px]">
                        <h2 className={hTitle}>Какова приблизительная площадь объекта?</h2>
                        <div className="flex flex-col gap-y-2 font-semibold text-sm">
                            <button name="До 50 кв. м." onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <span>До 50 кв. м.</span>
                            </button>
                            <button name="От 50 до 80 кв. м." onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <span>От 50 до 80 кв. м.</span>
                            </button>
                            <button name="Более 80 кв. м." onClick={(e) => handleChoose(e.currentTarget.name)} className="flex gap-x-[10px] items-center px-5 py-[30px] transition-all ease-in duration-300 hover:bg-white hover:bg-opacity-60">
                                <span>Более 80 кв. м.</span>
                            </button>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    progress === 4
                    ?
                    <div className="flex flex-col items-start gap-y-6 px-4 lg:px-0 max-w-[500px]">
                        <h2 className={hTitle}>Оставьте свои контакты и наш специалист перезвонит в течение 10 мин!</h2>
                        <form action="" className="flex flex-col gap-y-1 my-8">
                            <input className="h-[50px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 w-[450px] min-w-[300px]" type="tel" placeholder="Введите контактный номер" />
                            <input className="h-[50px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 w-[450px] min-w-[300px]" type="text" placeholder="Введите ваше имя" />
                            <input className="mt-2 h-[50px] bg-white bg-opacity-60 text-[#141414] font-semibold outline-none cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100" type="submit" value="Отправить заявку" />
                        </form>
                    </div>
                    :
                    null
                }
                
                <div className="font-monts text-sm opacity-60 absolute bottom-10">
                    {progress === 1 ? "1 " : null}
                    {progress === 2 ? "2 " : null}
                    {progress === 3 ? "3 " : null}
                    {progress === 4 ? "4 " : null}
                     из 4
                </div>

                {
                    progress > 1
                    ?
                    <button onClick={handleBack} className="font-monts text-sm opacity-60 absolute left-10 bottom-10">Назад</button>
                    :
                    null
                }
            </div>
        </section>
    )
}