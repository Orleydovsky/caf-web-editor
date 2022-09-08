const CompletionForm = () => {
  return (
    <div className='bg-cyan-900 text-white rounded-xl p-5 shadow-lg mb-5'>
      <form>
        <span>¿Con cuantos miembros de tu familia desarrollaste la CAF?</span>
        <input type='number' placeholder='1, 2, 3, ...7' className='rounded-xl text-xl p-5 text-black w-full mt-4' />
      </form>
    </div>
  )
}

export default CompletionForm
