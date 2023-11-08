import { useState, useEffect } from 'react'
import banner from '../assets/banner.png'
import Button from '../components/Button'

const slides = [
  {
    description: 'Design and order your new kitchen online today',
    title: 'Bespoke & made to measure handmade kitchen design',
    banner: banner,
  },
  {
    description: 'Design and order your new kitchen online today',
    title: 'Bespoke & made to measure handmade kitchen design 2',
    banner: banner,
  },
  {
    description: 'Design and order your new kitchen online today',
    title: 'Bespoke & made to measure handmade kitchen design 3',
    banner: banner,
  },
]

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideChange = (index) => {
    setActiveSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [activeSlide])

  return (
    <div className='relative w-full h-screen max-h-900 mb-0.5'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className='w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center text-white'
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <p
              className='uppercase text-sm tracking-widest'
              style={{ textShadow: '0px 0px 4px #000000' }}
            >
              {slide.description}
            </p>
            <h2
              className='xl:w-1/2 text-3xl xl:text-5xl font-helvetica font-bold mt-3 mb-7'
              style={{
                textShadow: '0px 0px 25px #00000080',
              }}
            >
              {slide.title}
            </h2>
            <Button text='Order Now' boxShadow />
          </div>
        </div>
      ))}
      <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className='w-12 h-1'
            style={{
              borderRadius: '3px',
              backgroundColor: activeSlide === index ? '#D4B254' : '#FFFFFF',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Banner
