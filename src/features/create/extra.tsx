const Extra = ({ extra }: {extra: string}) => {
  return (
    <div className='screen'>
      <h1 className='text-6xl text-white font-nunito font-bold mb-10 h-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 p-5 text-right shadow-xl rounded-xl'>
        Extra para el guía de familia
      </h1>
      <p className='text-4xl font-bold p-5 font-nunito h-1/2 text-cyan-900'>{extra}</p>
    </div>
  )
}
export default Extra
