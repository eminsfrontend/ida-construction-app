import Image from "next/image";
import { Montserrat } from '@next/font/google'
import Button from "./Button";
import { motion } from 'framer-motion'

const raleway = Montserrat({
    subsets: ['cyrillic'],
    variable: '--font-montserrat',
})

interface PriceProps {
    anchor?: string
    buttonAction?: () => void
}


export default function Price({ anchor, buttonAction }: PriceProps) {
    return (
        <section id={anchor} className="container mx-auto md:px-32 lg:px-0 pb-24 lg:pb-32 px-4 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center">
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeIn", duration: 0.3 }} className="w-full lg:w-[512px] bg-[#191919] h-[700px] shadow-customShadow2 lg:shadow-customShadow z-50 py-[84px] px-1 md:px-[60px] flex flex-col">
                    <Image src='/icons/crown.png' alt="crown" width={100} height={100} className="self-center" />
                    <h3 className="text-4xl font-medium mt-[30px] text-center">Премиум</h3>
                    <p className="text-sm font-medium opacity-60 text-center leading-[18px] mt-[20px]">Беспрецедентный уровень качетсва, высочайшее внимание деталям и индивидуальный подход.</p>
                    <div className="flex flex-col gap-y-[16px] my-10 px-8">
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/carama.svg" alt='cerama' width={24} height={24} />
                            <p className="text-sm font-medium">Крупноформатный керамогранит</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/nature.svg" alt='stone' width={24} height={24} />
                            <p className="text-sm font-medium">Натуральный камень и дерево</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/doors.svg" alt='doors' width={24} height={24} />
                            <p className="text-sm font-medium">Двери и плинтуса скрытого монтажа</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/decor.svg" alt='decor' width={24} height={24} />
                            <p className="text-sm font-medium">Декоративная штукатурка и многое другое</p>
                        </div>
                    </div>
                    <div className="border-b border-b-white border-opacity-60"></div>
                    <span className="text-4xl font-monts font-medium text-center pt-6">₽ 20 000 / кв. м.</span>
                </motion.div>
                {/* Second price area */}
                <motion.div initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{delay: 0.6, ease: "easeIn", duration: 0.3 }} className="w-full lg:w-[448px] bg-[#191919] h-[615px] z-40 py-[50px] px-1 md:px-[55px] flex flex-col">
                    <Image src='/icons/diamond.png' alt="diamond" width={80} height={80} className="self-center" />
                    <h3 className="text-2xl font-medium mt-6 text-center">Эксклюзив</h3>
                    <p className="text-xs font-medium opacity-60 text-center leading-[18px] mt-[20px]">Беспрецедентный уровень качетсва, высочайшее внимание деталям и индивидуальный подход.</p>
                    <div className="flex flex-col gap-y-[16px] my-10 px-8">
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/carama.svg" alt='cerama' width={24} height={24} />
                            <p className="text-xs font-medium">Крупноформатный керамогранит</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/nature.svg" alt='stone' width={24} height={24} />
                            <p className="text-xs font-medium">Натуральный камень и дерево</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/doors.svg" alt='doors' width={24} height={24} />
                            <p className="text-xs font-medium">Двери и плинтуса скрытого монтажа</p>
                        </div>
                        <div className="flex gap-x-[10px] items-center">
                            <Image src="/icons/priceIcons/decor.svg" alt='decor' width={24} height={24} />
                            <p className="text-xs font-medium">Декоративная штукатурка и многое другое</p>
                        </div>
                    </div>
                    <div className="border-b border-b-white border-opacity-60"></div>
                    <span className="text-2xl font-monts font-medium text-center pt-6">₽ 35 000 / кв. м.</span>
                </motion.div>
            </div>
            <div className="mt-[60px] flex justify-center w-full">
                <Button action={buttonAction} title='Персональная консультация' />
            </div>
            {/* comment for git */}
        </section>
    )
}