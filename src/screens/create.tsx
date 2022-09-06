import { useState } from 'react'
import Creator from '../components/creator'
import Preview from '../components/preview'

const Create = (): JSX.Element => {
  const [values, setValues] = useState({})
  return (
    <div className='flex'>
      <Creator setValues={setValues}/>
      <Preview values={values}/>
    </div>
  )
}

export default Create
