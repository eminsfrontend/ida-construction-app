import { myContainer, myFlexRowLeadingNoReverse, pDescription } from "@/utils/tailwind-styles"
import { motion } from 'framer-motion'

interface DottedInfoAreaProps {
    title1: string
    desc1: string
    title2: string
    desc2: string
}

export default function DottedInfoArea({ title1, desc1, title2, desc2 }: DottedInfoAreaProps) {
    return (
        <section className={myContainer}>
            <div className="border-t border-b border-dashed border-white border-opacity-60 py-[60px]">
                <div className={myFlexRowLeadingNoReverse}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title1}</h3>
                        <p className={pDescription}>{desc1}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, ease: "easeIn", duration: 1 }} className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title2}</h3>
                        <p className={pDescription}>{desc2}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}