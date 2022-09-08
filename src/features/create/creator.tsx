import { Formik, Form, useFormikContext } from 'formik'
import { Dispatch, SetStateAction, useEffect } from 'react'
import * as yup from 'yup'
import TextInput from './text-input'
import TextArea from './textarea-input'

const FormObserver = ({ setValues }: {setValues: Dispatch<SetStateAction<Values>>}) => {
  const { values } = useFormikContext<Values>()
  useEffect(() => setValues(values), [values])
  return null
}

export interface Values {
  title: string
  serie: string
  topic: number
  quote: string
  introduction: string
  extra: string
  sectionOneTitle: string
  sectionOneQuote: string
  sectionOneContent: string
  sectionTwoTitle: string
  sectionTwoQuote: string
  sectionTwoContent: string
  sectionThreeTitle: string
  sectionThreeQuote: string
  sectionThreeContent: string
  conclusion: string
}

export const initialValues: Values = {
  title: '',
  serie: '',
  topic: Number(''),
  quote: '',
  introduction: '',
  extra: '',
  sectionOneTitle: '',
  sectionOneQuote: '',
  sectionOneContent: '',
  sectionTwoTitle: '',
  sectionTwoQuote: '',
  sectionTwoContent: '',
  sectionThreeTitle: '',
  sectionThreeQuote: '',
  sectionThreeContent: '',
  conclusion: ''
}

const Creator = ({ setValues }: {setValues: Dispatch<SetStateAction<Values>>}) => {
  return (
    <div className='w-1/2 flex justify-end px-2'>
      <div className='w-96'>
        <Formik
         initialValues={{ initialValues }}
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
              <h1 className='header'>Portada</h1>
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
              placeholder='1, 2, 3, ...7'
            />
              <TextInput
              label='Cita:'
              name='quote'
              type='text'
              placeholder='Habacuc 3:1-4'
            />
              <button type="submit">Submit</button>
            </div>
            <div className='screen'>
              <h1 className='header'>Introducción</h1>
              <TextArea
              label='Contenido:'
              name='introduction'
              placeholder='¿Quién tiene sed?'
            />
            </div>
            <div className='screen'>
              <h1 className='header'>Extra para el guía de familia</h1>
              <TextArea
              label='Contenido:'
              name='extra'
              placeholder='¿Cómo provocamos un avivamiento en casa?'
            />
            </div>
            <div className='screen'>
              <h1 className='header'>Extra | sección 1</h1>
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
              <h1 className='header'>Extra | Sección 2</h1>
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
              <h1 className='header'>Extra | Sección 3</h1>
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
              <h1 className='header'>Conclusión</h1>
              <TextArea
              label='Contenido:'
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
