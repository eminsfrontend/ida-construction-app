import { useForm } from 'react-hook-form'

export default function Form() {

    const [submitResult, setSubmitResult] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('api/contact', {
          method: 'post',
          body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
          if (data.message === 'Сообщение успешно отправлено') {
            setSubmitResult('Сообщение успешно отправлено')
          } else if (data.message === 'Ошибка отправки, попробуйте снова') {
            setSubmitResult('Ошибка отправки, попробуйте снова')
          } else {
            setSubmitResult('')
          }
          setTimeout(() => setSubmitResult(''), 4000)
        })
      }
    
    return (
        <section className="container mx-auto pb-24 lg:pb-32 px-4 md:px-0 max-w-5xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-y-[10px]">
              
                <input 
                  className="h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 w-[450px] min-w-[300px]" 
                  type="text" 
                  placeholder="Введите ваше имя" />

                <input 
                  className="h-[60px] font-medium text-opacity-60 outline-none border border-white bg-transparent px-10 w-[450px] min-w-[300px]" 
                  type="tel" 
                  placeholder="Введите контактный номер" />

                <input 
                  className="border border-white px-[5px] py-[6px] mt-2 h-[60px] w-[450px] min-w-[300px] text-[#141414] 
                 font-semibold outline-none cursor-pointer transition-all ease-in duration-300 hover:bg-opacity-100" 
                  type="submit" 
                  value="Отправить заявку" />
            </form>
        </section>
    )
}