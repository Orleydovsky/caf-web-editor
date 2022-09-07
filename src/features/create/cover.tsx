interface Props {
  title: string
  serie: string
  topic: number
  quote: string
}

const Cover = ({ title, serie, topic, quote }: Props) => {
  return (
    <div className='w-full h-screen rounded-xl relative border-2'>
      <div className='p-5 absolute'>
        <img src='/logo.png' />
      </div>
      <img src='/default-cover.jpg' className='w-full h-full object-cover rounded-xl' />
      <div className='absolute bg-white bottom-0 p-5 w-5/6 rounded-tr-xl'>
        <h1 className='text-3xl text-rose-600 font-nunito font-bold'>{title}</h1>
        <h2 className='text-center font-semibold'>{serie} | Tema {topic}</h2>
        <button className='text-center text-rose-600 font-bold border-rose-600 border-2 py-1 mt-5 w-full rounded-lg font-nun'>{quote}</button>
      </div>
    </div>
  )
}

export default Cover
