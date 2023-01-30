import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function SimpleForm() {

    const form = useRef();
    const [result, setResult] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
            "service_ej1f8mm",
            "template_kjpecd9",
             form.current,
            "Yc-8xdH_nDcDxyS86"
        ).then(() => {
            setResult("Заявка успешно оформлена")
            setTimeout(() => setResult(''), 3000)
        }, () => {
            setResult("Ошибка! Попробуйте еще раз...")
        })
    }    
 
    return (

        
        <section className="container mx-auto md:px-32 lg:px-0 pb-[125px] lg:pt-[40px] px-4 max-w-5xl">
            <form ref={form} onSubmit={sendEmail} className="border border-white p-[5px] flex flex-col md:flex-row lg:gap-x-[64px] xl:gap-x-[124px]">
                <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона" className="py-4 md:py-0 flex-1 font-medium text-opacity-60 bg-transparent pl-2 md:pl-10 outline-none" />
                <input type="submit" value="Отправить заявку" className="font-monts py-4 md:py-0 flex-1 h-[50px] bg-white bg-opacity-60 text-[#141414] font-semibold outline-none cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100" />
                {result ? 
                    <div className="z-50 fixed bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 bg-[#191919] flex justify-center items-center gap-x-3 w-full md:w-1/3 py-8">
                        <Image src='/icons/approved.svg' alt='approve' width={36} height={36} />
                        <span className="font-semibold">{result}</span>
                    </div>
                    :
                    null
                }
            </form>
        </section>
    )
}