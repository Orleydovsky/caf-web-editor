import Creator from '../components/creator'
import Preview from '../components/preview'

const Create = (): JSX.Element => {
  return (
    <div className='flex'>
      <Creator/>
      <Preview/>
    </div>
  )
}

export default Create
