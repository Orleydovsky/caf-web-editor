import { useField, FieldHookConfig } from 'formik'
import { ClassAttributes, InputHTMLAttributes } from 'react'

interface Props
  extends
  InputHTMLAttributes<HTMLInputElement>,
  ClassAttributes<HTMLInputElement> {
  label: string
}
const TextInput = ({ label, ...props }: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)

  return (
    <div className='flex flex-col text-lg mb-2'>
      <label htmlFor={props.name}>{label}</label>
      <input className='border-4 rounded-lg py-1 mt-2 px-2 outline-none' {...field} {...props} />
      {Boolean(meta.touched) && Boolean(meta.error)
        ? <div className='text-red-600 text-sm'>{meta.error}</div>
        : null
      }
    </div>
  )
}
export default TextInput
