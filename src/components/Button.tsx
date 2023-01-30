interface ButtonProps {
    title: string
    action?: () => void
}

export default function Button({title, action}: ButtonProps) {
    return (
        <button onClick={action} className="border border-white px-[5px] py-[6px] w-[300px] font-semibold my-3 transition-all ease-in duration-300 hover:bg-white hover:text-dark">
            <div className="border border-white border-opacity-60 py-[15px]">
                {title}
            </div>
        </button>
    )
}