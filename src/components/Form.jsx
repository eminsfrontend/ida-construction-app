import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';


export default function Form() {

    const form = useRef();
    const [submitResult, setSubmitResult] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_ej1f8mm", "template_kjvmmvz", form.current, "Yc-8xdH_nDcDxyS86")
        .then((result) => {
            setSubmitResult("Заявка успешно отправлена")
            console.log(form.current);
            setTimeout(() => setSubmitResult(''), 4000)
        }, (error) => {
            setSubmitResult("Ошибка. Попробуйте еще раз!")
        });
    };
    
    return (
        <section className="container mx-auto pb-24 lg:pb-32 px-4 md:px-0 max-w-5xl">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-y-[10px] md:px-32 lg:px-0">

                <div className='flex flex-col gap-y-2 relative w-full lg:items-center'>
                  <input 
                    className="h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 lg:w-[450px] md:min-w-[300px]" 
                    type="text"
                    name="name"
                    placeholder="Введите ваше имя" 
                    {...register("firstName", { required: true, minLength: 2 })}  
                  />
                  <span className='absolute top-1 right-2 text-xs text-red-700'>{errors?.firstName ? 'Неправильно введено имя' : null}</span>
                </div>

                <div className='flex flex-col gap-y-2 relative w-full lg:items-center'>
                  <input 
                    className="h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 lg:w-[450px] md:min-w-[300px]" 
                    type="tel"
                    name="number" 
                    placeholder="Введите контактный номер" 
                    {...register("mobileNumber", { required: true, minLength: 10, maxLength: 16 })}
                  />
                  <span className='absolute top-1 right-2 text-xs text-red-700'>{errors?.mobileNumber ? 'Неправильной номер телефона' : null}</span>
                </div>

                <div className='flex flex-col gap-y-4 w-full lg:items-center'>
                  <input 
                    className="border border-white px-[5px] py-[6px] mt-2 h-[60px] lg:w-[450px] md:min-w-[300px] text-[#141414] 
                    font-semibold outline-none cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100" 
                    type="submit" 
                    value="Отправить заявку" 
                  />
                  {submitResult ? <span className='font-semibold text-lg text-green-700'>Заявка отправлена</span> : null }
                </div>
                
            </form>
        </section>
    )
}