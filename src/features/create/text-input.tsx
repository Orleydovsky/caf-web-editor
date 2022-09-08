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
    <div className='flex flex-col mb-2'>
      <label className='font-semibold' htmlFor={props.name}>{label}</label>
      <input className='border-2 rounded-lg py-2 mt-2 shadow-sm px-4 outline-none' {...field} {...props} />
      {Boolean(meta.touched) && Boolean(meta.error)
        ? <div className='text-red-600 text-sm'>{meta.error}</div>
        : null
      }
    </div>
  )
}
export default TextInput
