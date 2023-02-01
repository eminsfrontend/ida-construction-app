import { myContainerYExtended, myFlexRowLeadingNoReverse, pDescription } from "@/utils/tailwind-styles"
import { motion } from "framer-motion"
import Image from "next/image"

interface InfoAndBigIconProps {
    title1: string
    desc1: string
    icon1: string
    alt1: string
    title2: string
    desc2: string
    icon2: string
    alt2: string
}

export default function InfoAndBigIcon({ title1, desc1, icon1, alt1, title2, desc2, icon2, alt2 }: InfoAndBigIconProps) {
    return (
        <section className={`${myContainerYExtended} overflow-hidden md:overflow-visible`}>
            <div className={myFlexRowLeadingNoReverse}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0 relative">
                    <div className="z-50 flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title1}</h3>
                        <p className={pDescription}>{desc1}</p>
                    </div>
                    <Image src={`/icons/${icon1}.svg`} alt={alt1} width={200} height={200} className="absolute -right-16 top-1/2 -translate-y-[60%] z-40 opacity-[3%]" />
                </motion.div>
                <div className="flex-1" />
            </div>
            <div className={myFlexRowLeadingNoReverse}>
                <div className="flex-1" />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, ease: "easeIn", duration: 1 }} className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0 relative">
                    <div className="z-50 flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title2}</h3>
                        <p className={pDescription}>{desc2}</p>
                    </div>
                    <Image src={`/icons/${icon2}.svg`} alt={alt2} width={200} height={200} className="absolute -right-16 top-1/2 -translate-y-[60%] z-40 opacity-[3%]" />
                </motion.div>
            </div>
        </section>
    )
}