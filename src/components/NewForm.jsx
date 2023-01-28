import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function NewForm() {
    
    const form = useRef();
    const [result, setResult] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
            "service_ej1f8mm",
            "template_ck8i6in",
             form.current,
            "Yc-8xdH_nDcDxyS86"
        ).then(() => {
            setResult("Заявка успешно оформлена")
            setTimeout(() => setResult(''), 4000)
        }, () => {
            setResult("Ошибка! Попробуйте еще раз...")
        })
    }    

    return (
        <section className="container mx-auto pb-24 lg:pb-32 px-4 md:px-0 max-w-5xl">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-y-[10px] md:px-32 lg:px-0" >
                <div className="flex flex-col gap-y-2 relative w-full lg:items-center">
                    <input type="text" name="from_name" id="from_name" placeholder="Введите ваше имя" className="h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 lg:w-[450px] md:min-w-[300px]" />
                </div>
                <div className="flex flex-col gap-y-2 relative w-full lg:items-center">
                    <input type="tel" name="from_phone" id="from_phone" placeholder="Введите контактный номер" className="font-monts h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 lg:w-[450px] md:min-w-[300px]" />
                </div>
                <div className='flex flex-col gap-y-4 w-full lg:items-center'>
                    <div className="border border-white px-[5px] py-[5px] mt-2 h-[60px] lg:w-[450px] md:min-w-[300px] text-[#141414] font-semibold" >
                        <input type="submit" value="Отправить заявку" className="bg-white bg-opacity-60 w-full h-full cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100 outline-none " />
                    </div>
                    {result ? 
                        <div className="z-50 fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 bg-[#191919] flex justify-center items-center gap-x-3 w-full md:w-1/3 py-8">
                            <Image src='/icons/approved.svg' alt='approve' width={36} height={36} />
                            <span className="font-semibold">Сообщение успешно отправлено</span>
                        </div>
                        :
                        null
                    }
                </div>
            </form>
        </section>
    )
}