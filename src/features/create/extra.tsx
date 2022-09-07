const Extra = ({ extra }: {extra: string}) => {
  return <div className='w-full h-screen rounded-xl relative border-2'>
    <h1 className='text-6xl text-white font-nunito font-bold mb-10 h-1/2 bg-gradient-to-r from-cyan-600 to-cyan-700 p-5 text-right shadow-xl rounded-xl'>
      Extra para el guía de familia
    </h1>
    <p className='text-4xl font-bold p-5 font-nunito h-1/2 text-cyan-900'>{extra}</p>
  </div>
}
export default Extra
