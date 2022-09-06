import { Formik, Form, useField, useFormikContext } from 'formik'
import { useEffect } from 'react'
import * as yup from 'yup'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='flex flex-col text-lg mb-2'>
      <label htmlFor={(Boolean(props.id)) || props.name}>{label}</label>
      <input className='border-4 rounded-lg py-1 mt-2 px-2 outline-none' {...field} {...props} />
      {(Boolean(meta.touched)) && (Boolean(meta.error))
        ? (
        <div className='text-red-600 text-sm'>{meta.error}</div>
          )
        : null}
    </div>
  )
}

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='flex flex-col text-lg mb-2'>
      <label htmlFor={(Boolean(props.id)) || props.name}>{label}</label>
      <textarea className='border-4 rounded-lg py-1 mt-2 px-2 outline-none' {...field} {...props}></textarea>
      {(Boolean(meta.touched)) && (Boolean(meta.error))
        ? (
        <div className='text-red-600 text-sm'>{meta.error}</div>
          )
        : null}
    </div>
  )
}

const FormObserver = ({ setValues }) => {
  const { values } = useFormikContext()
  useEffect(() => {
    setValues(values)
  }, [values])
  return null
}

const Creator = ({ setValues }): JSX.Element => {
  return (
    <div className='w-1/2 flex justify-end'>
      <div className='w-96'>
       <Formik
         initialValues={{
           title: '',
           serie: '',
           topic: '',
           quote: '',
           introduction: '',
           extra: ''
         }}
         validationSchema={yup.object({
           title: yup.string().required('Se requiere un título'),
           serie: yup.string().required('Especificar la serie'),
           topic: yup.number().required('Especificar el tema'),
           quote: yup.string().required('Cita bíblica'),
           introduction: yup.string().required('Escriba una introducción'),
           extra: yup.string().required('Sección requerida'),
           sectionOneTitle: yup.string().required('Es necesario un título'),
           sectionOneQuote: yup.string(),
           sectionOneContent: yup.string().required('Debes escribir contenido aquí'),
           sectionTwoTitle: yup.string().required('Es necesario un título'),
           sectionTwoQuote: yup.string(),
           sectionTwoContent: yup.string().required('Debes escribir contenido aquí'),
           sectionThreeTitle: yup.string().required('Es necesario un título'),
           sectionThreeQuote: yup.string(),
           sectionThreeContent: yup.string().required('Debes escribir contenido aquí'),
           conclusion: yup.string().required('Por favor escribe una conclusión')
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2))
             setSubmitting(false)
           }, 400)
         }}
       >
          <Form>
          <FormObserver setValues={setValues} />
          <div className='screen'>
            <h1 className='text-3xl font-semibold font-nunito mb-5'>Portada</h1>
            <TextInput
              label='Título:'
              name='title'
              type='text'
              placeholder='¿Quién tiene sed?'
            />
            <TextInput
              label='Serie:'
              name='serie'
              type='text'
              placeholder='Pasión por Dios'
            />
            <TextInput
              label='Tema:'
              name='topic'
              type='number'
              placeholder='1, 2, ...7'
            />
            <TextInput
              label='Cita'
              name='quote'
              type='text'
              placeholder='Habacuc 3:1-4'
            />
            <button type='submit'>Publicar</button>
          </div>
          <div className='screen'>
            <TextArea
              label='Introducción:'
              name='introduction'
              placeholder='¿Quién tiene sed?'
            />
          </div>
          <div className='screen'>
            <TextArea
              label='Extra para el guía de familia:'
              name='extra'
              placeholder='¿Cómo provocamos un avivamiento en casa?'
            />
          </div>
          <div className='screen'>
            <h1 className='font-nunito text-xl font-bold'>Extra | sección 1</h1>
            <TextInput
              label='Título:'
              name='sectionOneTitle'
              type='text'
              placeholder='Título sección 1'
              />
            <TextInput
              label='Texto relevante:'
              name='sectionOneQuote'
              type='text'
              placeholder='Habacuc 3:1-4'
              />
              <TextArea
                label='Contenido:'
                name='sectionOneContent'
                placeholder='Contenido'
              />
          </div>
          <div className='screen'>
            <h1 className='font-nunito text-xl font-bold'>Extra | Sección 2</h1>
            <TextInput
              label='Título:'
              name='sectionTwoTitle'
              type='text'
              placeholder='Título sección 2'
              />
            <TextInput
              label='Texto relevante:'
              name='sectionTwoQuote'
              type='text'
              placeholder='Habacuc 3:1-4'
              />
              <TextArea
                label='Contenido:'
                name='sectionTwoContent'
                placeholder='Contenido'
              />
          </div>
          <div className='screen'>
            <h1 className='font-nunito text-xl font-bold'>Extra | Sección 3</h1>
            <TextInput
              label='Título:'
              name='sectionThreeTitle'
              type='text'
              placeholder='Título sección 3'
              />
            <TextInput
              label='Texto relevante:'
              name='sectionThreeQuote'
              type='text'
              placeholder='Habacuc 3:1-4'
              />
              <TextArea
                label='Contenido:'
                name='sectionThreeContent'
                placeholder='Contenido'
              />
          </div>
          <div className='screen'>
            <TextArea
              label='Conclusión'
              name='conclusion'
              placeholder='Conclusión'
            />
          </div>
         </Form>
       </Formik>
      </div>
    </div>
  )
}

export default Creator
