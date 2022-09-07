import { FieldHookConfig, useField } from 'formik'
import { ClassAttributes, InputHTMLAttributes } from 'react'

interface Props
  extends
  InputHTMLAttributes<HTMLTextAreaElement>,
  ClassAttributes<HTMLTextAreaElement> {
  label: string
}

const TextArea = ({ label, ...props }: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)
  return (
    <div className='flex flex-col text-lg mb-2'>
      <label htmlFor={props.name}>{label}</label>
      <textarea className='border-4 rounded-lg py-1 mt-2 px-2 outline-none' {...field} {...props}></textarea>
      {Boolean(meta.touched) && Boolean(meta.error)
        ? (
          <div className='text-red-600 text-sm'>{meta.error}</div>
          )
        : null}
    </div>
  )
}

export default TextArea
