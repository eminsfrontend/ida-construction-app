import { myContainer } from "@/utils/tailwind-styles";
import { SingleCenteredInfo, CustomSlider } from './'
import { CustomSliderSlide } from "./CustomSlider";

interface HighlightedAreaProps {
    mainTitle: string
    mainDesc: string
    slides: CustomSliderSlide[]
    anchor?: string
}

export default function HighlightedArea({ mainTitle, mainDesc, slides, anchor }: HighlightedAreaProps) {
    return (
        <section id={anchor} className="bg-[#BB2649] bg-opacity-10">
            <div className={`container mx-auto mt-24 lg:mt-32 pb-24 lg:pb-32 max-w-5xl flex flex-col`}>
                <SingleCenteredInfo title={mainTitle} desc={mainDesc} />
                <CustomSlider slides={slides} />
            </div>
        </section>
    )
}