import Image from "next/image";
import formImage from '../../public/img/popup-form-image.jpg'
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollContext } from "@/utils/scroll-observer";



export default function PopupForm({ buttonAction, popupState }) {

    const form = useRef();
    const [result, setResult] = useState("")

    const { scrollY } = useContext(ScrollContext)

    useEffect(() => {
        popupState ? document.body.style.overflow = 'hidden' : ''
        return () => document.body.style.overflow = 'unset'
    }, [popupState, buttonAction])

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
                setTimeout(() => {
                    setResult('')
                    buttonAction()
                }, 2000)
            }, () => {
                setResult("Ошибка! Попробуйте еще раз...")
                setTimeout(() => {
                    setResult('')
                }, 1500)
            })
    }

    return (
        <div onClick={buttonAction} style={{ top: scrollY }} className='flex items-center justify-center w-full h-[100%] absolute z-[999] bg-[#191919] bg-opacity-80 backdrop-blur-md'>
            <div onClick={e => e.stopPropagation()} className='flex flex-col sm:flex-row w-full lg:w-2/3 h-2/3 sm:h-[85%] lg:h-[40%] mx-2 bg-[#191919]'>
                <div className="flex-1 relative sm:h-full">
                    <Image src={formImage} alt='form-popup-image' fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-center gap-y-4 px-4 py-8">
                    {
                        result
                            ?
                            <div className="flex items-center gap-x-3 py-3 px-3">
                                <Image src={`/icons/${result === "Ошибка! Попробуйте еще раз..." ? "failed" : "approved"}.svg`} alt='approve' width={36} height={36} />
                                <span className="font-semibold">{result}</span>
                            </div>
                            :
                            <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-y-2'>
                                <input type="text" id="from_name" name="from_name" placeholder="Введите ваше имя" className="px-4 py-3 outline-none border border-white bg-transparent font-medium" />
                                <input type="tel" id="from_phone" name="from_phone" placeholder="Введите контактный номер" className="px-4 py-3 outline-none border border-white bg-transparent font-medium" />
                                <div className="px-1 py-1 mt-1 border border-white">
                                    <input type="submit" value="Отправить заявку" className="w-full px-4 py-3 bg-white bg-opacity-60 hover:bg-opacity-100 transition-all ease-in duration-300 cursor-pointer font-semibold text-[#141414]" />
                                </div>
                            </form>
                    }
                    <button onClick={buttonAction} className="px-4 py-2 text-xs lg:text-base opacity-60 hover:opacity-100 transition-opacity ease-in duration-300">
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    )
}