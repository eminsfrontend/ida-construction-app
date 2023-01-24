import { hTitle, myContainer, pDescription } from "@/utils/tailwind-styles"

interface SingleCenteredInfoProps {
    title: string
    desc: string
}

export default function SingleCenteredInfo({title, desc}: SingleCenteredInfoProps) {
    return (
        <section className={myContainer}>
            <div className="flex flex-col gap-y-6 px-4 lg:px-0 text-center mx-auto max-w-[450px] lg:gap-x-[64px] xl:gap-x-[124px]">
                <h2 className={hTitle}>{title}</h2>
                <p className={pDescription}>{desc}</p>
            </div>
        </section>
    )
}