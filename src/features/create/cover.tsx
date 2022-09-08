interface Props {
  title: string
  serie: string
  topic: number
  quote: string
}

const Cover = ({ title, serie, topic, quote }: Props) => {
  return (
    <div className='screen relative p-0'>
      <div className='absolute p-5 justify-center flex'>
        <img className='w-4/6' src='/logo.png' />
      </div>
      <img src='/default-cover.jpg' className='w-full h-full object-cover rounded-xl' />
      <div className='absolute bg-white bottom-0 p-5 w-5/6 rounded-xl'>
        <h1 className='text-3xl text-cyan-600 font-nunito font-bold'>{title}</h1>
        <h2 className='text-center font-semibold'>{serie} | Tema {topic}</h2>
        <button className='text-center text-cyan-600 font-bold border-cyan-600 border-2 py-1 mt-5 w-full rounded-lg font-nun'>{quote}</button>
      </div>
    </div>
  )
}

export default Cover
