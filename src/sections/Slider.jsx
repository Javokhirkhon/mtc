import { useState, useEffect } from 'react'
import Button from '../components/Button'
import left from '../assets/left.png'
import right from '../assets/right.png'

const slides = [
  {
    title: 'Over 35 years experience designing handmade kitchens',
    description:
      'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
    author: 'Jane, Dundee',
  },
  {
    title: 'Over 35 years experience designing handmade kitchens',
    description:
      'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
    author: 'Jane, Dundee 2',
  },
  {
    title: 'Over 35 years experience designing handmade kitchens',
    description:
      'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
    author: 'Jane, Dundee 3',
  },
]

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [activeSlide])

  return (
    <div
      className='relative w-full h-screen xl:h-600 overflow-hidden'
      style={{
        backgroundColor: '#EEEEEE',
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all bg-transparent flex items-center justify-center text-center px-10 xl:px-0 ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={left}
            alt='left'
            className='cursor-pointer'
            onClick={() =>
              setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
            }
          />
          <div className='flex flex-col items-center xl:w-600 mx-10 xl:mx-40'>
            <div
              className='uppercase text-sm tracking-widest'
              style={{
                color: '#D4B254 ',
              }}
            >
              What Our Customers Say
            </div>
            <div
              className='text-3xl mt-4 mb-6 font-helvetica font-bold'
              style={{
                color: '#222222',
              }}
            >
              {slide.title}
            </div>
            <div
              className='font-helvetica'
              style={{
                color: '#777777',
              }}
            >
              {slide.description}
            </div>
            <div
              className='mt-3 mb-8'
              style={{
                color: '#777777',
              }}
            >
              {slide.author}
            </div>
            <Button text='Frequently Asked Questions' />
          </div>
          <img
            src={right}
            alt='left'
            className='cursor-pointer'
            onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
          />
        </div>
      ))}
    </div>
  )
}

export default Banner
