import { hTitle, myContainer, myFlexRowLeadingNoReverse, pDescription } from "@/utils/tailwind-styles";
import { motion } from 'framer-motion'

interface InfoAndImageProps {
    title: string
    desc: string
    list: { id: number, text: string }[]
}

export default function InfoAndListArea({ title, desc, list }: InfoAndImageProps) {

    const items = list.map((item, index) => (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2, ease: "easeIn", duration: 0.6 }} key={item.id} className="flex gap-x-5 items-center">
            <div className="shrink-0 w-[60px] h-[60px] rounded-full bg-[#191919] flex items-center justify-center">{index + 1}</div>
            <p className="font-medium">{item.text}</p>
        </motion.div>
    ))

    return (
        <section className={myContainer}>
            <div className={myFlexRowLeadingNoReverse}>
                <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                    <h2 className={hTitle}>{title}</h2>
                    <p className={pDescription}>{desc}</p>
                </div>
                <div className="flex flex-1 flex-col gap-y-[40px]">
                    {items}
                </div>
            </div>
        </section>
    )
}