interface ButtonProps {
    title: string
}

export default function Button({title}: ButtonProps) {
    return (
        <button className="border border-white px-[5px] py-[6px] w-[300px] font-semibold my-3 transition-all ease-in duration-300 hover:bg-white hover:text-dark">
            <div className="border border-white border-opacity-60 py-[15px]">
                {title}
            </div>
        </button>
    )
}