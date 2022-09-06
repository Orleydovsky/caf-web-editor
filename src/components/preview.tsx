import { validateYupSchema } from 'formik'

import React from 'react'

const Preview = ({ values }): JSX.Element => {
  const {
    title,
    serie,
    topic,
    quote,
    introduction,
    extra,
    sectionOneTitle,
    sectionOneQuote,
    sectionOneContent,
    sectionTwoTitle,
    sectionTwoQuote,
    sectionTwoContent,
    sectionThreeTitle,
    sectionThreeQuote,
    sectionThreeContent,
    conclusion
  } = values
  return (
    <div className='w-1/2'>
      <div className='w-96'>
        <div className='w-full h-screen rounded-xl relative border-2'>
          <div className='p-5 absolute'>
            <img src='/logo.png'/>
          </div>
          <img src='/default-cover.jpg' className='w-full h-full object-cover rounded-xl'/>
          <div className='absolute bg-white bottom-0 p-5 w-5/6 rounded-tr-xl'>
            <h1 className='text-3xl text-rose-600 font-nunito font-bold'>{title}</h1>
            <h2 className='text-center font-semibold'>{serie} | Tema {topic}</h2>
            <button className='text-center text-rose-600 font-bold border-rose-600 border-2 py-1 mt-5 w-full rounded-lg font-nun'>{quote}</button>
            <div className='text-sm font-semibold text-'>
            </div>
          </div>
        </div>
        <Section content={introduction} title='Introducción'/>
        <div className='w-full h-screen rounded-xl relative border-2'>
          <h1 className='text-6xl text-white font-nunito font-bold mb-10 h-1/2 bg-gradient-to-r from-cyan-600 to-cyan-700 p-5 text-right shadow-xl rounded-xl'>
            Extra para el guía de familia
          </h1>
          <p className='text-4xl font-bold p-5 font-nunito h-1/2 text-cyan-900'>{extra}</p>
        </div>
        <Section title={sectionOneTitle} relevantQuote={sectionOneQuote} content={sectionOneContent}/>
        <Section title={sectionTwoTitle} relevantQuote={sectionTwoQuote} content={sectionTwoContent}/>
        <Section title={sectionThreeTitle} relevantQuote={sectionThreeQuote} content={sectionThreeContent}/>
        <div className='w-full font-nunito h-screen rounded-xl border-2 bg-gradient-to-r from-cyan-600 to-cyan-700 p-5'>
          <h1 className='text-3xl shadow-2xl text-white font-semibold rounded-xl py-2'>
            Conclusión
          </h1>
          <div className='bg-white rounded-xl p-5 shadow-lg mb-5'>
            { conclusion }
          </div>
          <div className='bg-cyan-900 text-white rounded-xl p-5 shadow-lg mb-5'>
          <form>
            <span className='mb-5'>
              ¿Con cuantos miembros de tu familia desarrollaste la CAF?
            <input type='number' placeholder='7' className='rounded-xl text-xl p-5 text-black w-full'/>
            </span>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section = ({ content, title, relevantQuote }) => {
  return (
    <div className='w-full rounded-xl border-2 p-5 bg-gradient-to-r from-cyan-600 to-cyan-700 h-screen'>
      <div className='text-white font-semibold font-nunito mb-5'>
        <h2 className='text-3xl '>{title}</h2>
        <h3>{relevantQuote}</h3>
      </div>
      {
      content !== undefined
        ? content.split('-').length > 1
          ? content.split('-').slice(1).map((content, index) => {
            return (
            <div key={index} className={index % 2 === 0 ? 'light-card' : 'dark-card'}>
              {content}
            </div>
            )
          })
          : <div>
          { content }
          </div>
        : null
      }
  </div>
  )
}

export default Preview
