import CompletionForm from './completion-form'

const Conclusion = ({ conclusion }: {conclusion: string}) => {
  return (
    <section className='w-full font-nunito h-screen rounded-xl border-2 bg-gradient-to-r from-cyan-600 to-cyan-700 p-5'>
      <h1 className='text-3xl shadow-2xl text-white font-semibold rounded-xl py-2'>Conclusión</h1>
      <div className='bg-white rounded-xl p-5 shadow-lg mb-5'>{conclusion}</div>
      <CompletionForm/>
    </section>
  )
}

export default Conclusion
