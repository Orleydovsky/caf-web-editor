import Conclusion from './conclusion'
import Cover from './cover'
import { Values } from './creator'
import Extra from './extra'
import Section from './section'

const Preview = ({ values }: {values: Values}) => {
  return (
    <div className='w-1/2 px-2'>
      <div className='w-96'>
        <Cover title={values.title} serie={values.serie} topic={values.topic} quote={values.quote}/>
        <Section title='Introducción' content={values.introduction} />
        <Extra extra={values.extra} />
        <Section title={values.sectionOneTitle} relevantQuote={values.sectionOneQuote} content={values.sectionOneContent}/>
        <Section title={values.sectionTwoTitle} relevantQuote={values.sectionTwoQuote} content={values.sectionTwoContent}/>
        <Section title={values.sectionThreeTitle} relevantQuote={values.sectionThreeQuote} content={values.sectionThreeContent}/>
        <Conclusion conclusion={values.conclusion} />
      </div>
    </div>
  )
}

export default Preview
