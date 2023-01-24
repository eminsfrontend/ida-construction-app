import { myContainer, myFlexRowLeadingNoReverse, pDescription } from "@/utils/tailwind-styles"

interface DottedInfoAreaProps {
    title1: string
    desc1: string
    title2: string
    desc2: string
}

export default function DottedInfoArea({title1, desc1, title2, desc2}: DottedInfoAreaProps) {
    return (
        <section className={myContainer}>
            <div className="border-t border-b border-dashed border-white border-opacity-60 py-[60px]">
                <div className={myFlexRowLeadingNoReverse}>
                    <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title1}</h3>
                        <p className={pDescription}>{desc1}</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-y-6 px-4 lg:px-0">
                        <h3 className="font-bold">{title2}</h3>
                        <p className={pDescription}>{desc2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}