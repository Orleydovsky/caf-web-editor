import { faCloud, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const History = () => {
  return (
    <div>
      <div className='container mx-auto max-w-4xl'>
        <div className='rounded-lg p-5 bg-gray-50 shadow-md flex justify-between items-center mb-5'>
          <div className='flex'>
            <div className='bg-gray-200 w-20 h-20 rounded-full shadow-md'>
              {/* Image */}
            </div>
            <div className='px-5'>
              <div className='font-nunito text-xl font-semibold'>
                Título de la C.A.F
              </div>
              <div>
                Detalles
              </div>
            </div>
          </div>
          <div>
            <button className='rounded-lg py-2 px-4 shadow-md text-white bg-sky-600 hover:bg-sky-700'>
              Publicar <FontAwesomeIcon icon={faCloudArrowUp}/>
            </button>
          </div>
        </div>
        <div className='rounded-lg p-5 bg-gray-50 shadow-md flex justify-between items-center'>
          <div className='flex'>
            <div className='bg-gray-200 w-20 h-20 rounded-full shadow-md'>
              {/* Image */}
            </div>
            <div className='px-5'>
              <div className='font-nunito text-xl font-semibold'>
                Título de la C.A.F
              </div>
              <div>
                Detalles
              </div>
            </div>
          </div>
          <div>
            <button className='rounded-lg py-2 px-4 shadow-md text-white bg-sky-600'>
              Publicado: 07/09/22
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
