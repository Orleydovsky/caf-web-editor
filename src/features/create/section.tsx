interface Props {
  content: string
  title: string
  relevantQuote?: string
}
const Section = ({ content, title, relevantQuote }: Props) => {
  return <div className='w-full rounded-xl border-2 p-5 bg-gradient-to-r from-cyan-600 to-cyan-700 h-screen'>
    <div className='text-white font-semibold font-nunito mb-5'>
      <h2 className='text-3xl '>{title}</h2>
      <h3>{relevantQuote}</h3>
    </div>
    {content !== undefined
      ? content.split('-').length > 1
        ? content.split('-').slice(1).map((content, index) => {
          return <div key={index} className={index % 2 === 0 ? 'light-card' : 'dark-card'}>
            {content}
          </div>
        })
        : <div>
          {content}
        </div>
      : null}
  </div>
}

export default Section
