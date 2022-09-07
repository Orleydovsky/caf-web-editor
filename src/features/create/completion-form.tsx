const CompletionForm = () => {
  return (
    <div className='bg-cyan-900 text-white rounded-xl p-5 shadow-lg mb-5'>
      <form>
        <span className='mb-5'>
          ¿Con cuantos miembros de tu familia desarrollaste la CAF?
          <input type='number' placeholder='1, 2, 3, ...7' className='rounded-xl text-xl p-5 text-black w-full' />
        </span>
      </form>
    </div>
  )
}

export default CompletionForm
