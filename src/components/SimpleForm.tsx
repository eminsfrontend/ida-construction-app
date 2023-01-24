export default function SimpleForm() {
    return (
        <section className="container mx-auto md:px-32 lg:px-0 pb-[125px] lg:pt-[40px] px-4 max-w-5xl">
            <form action="" className="border border-white p-[5px] flex flex-col md:flex-row lg:gap-x-[64px] xl:gap-x-[124px]">
                <input type="tel" placeholder="Введите номер телефона" className="py-4 md:py-0 flex-1 font-medium text-opacity-60 bg-transparent pl-2 md:pl-10 outline-none" />
                <input type="submit" value="Отправить заявку" className="py-4 md:py-0 flex-1 h-[50px] bg-white bg-opacity-60 text-[#141414] font-semibold outline-none cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100" />
            </form>
        </section>
    )
}