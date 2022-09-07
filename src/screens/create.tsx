import { useState } from 'react'
import Preview from '../features/create/preview'
import Creator, { initialValues } from '../features/create/creator'

const Create = () => {
  const [values, setValues] = useState(initialValues)
  return (
    <div className='flex'>
      <Creator setValues={setValues}/>
      <Preview values={values}/>
    </div>
  )
}

export default Create
