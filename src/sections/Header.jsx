import { useState } from 'react'
import logo from '../assets/logo.png'
import { useEffect } from 'react'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import cart from '../assets/cart.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full top-0 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 text-white ${
        isScrolled ? 'bg-zinc-900' : 'bg-transparent'
      }`}
    >
      <div
        className={`xl:container flex items-center justify-between h-110 uppercase relative border-white border-opacity-30 text-sm tracking-widest ${
          isScrolled ? 'border-0' : 'border-b'
        }`}
      >
        <div className='hidden xl:flex items-center'>
          <div className='flex gap-3'>
            <a href='#' className='w-6'>
              <img src={fb} alt='fb' />
            </a>
            <a href='#' className='w-6'>
              <img src={twitter} alt='fb' />
            </a>
            <a href='#' className='w-6'>
              <img src={insta} alt='fb' />
            </a>
          </div>
          <div>
            <a href='#' className='ml-36 mr-10'>
              Shop
            </a>
            <a href='#'>Plan My Kitchen</a>
          </div>
        </div>
        <img
          src={logo}
          alt='logo'
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
        <div className='hidden xl:flex items-center'>
          <div>
            <a href='#'>About Us</a>
            <a href='#' className='ml-10 mr-16'>
              Gallery
            </a>
          </div>
          <a
            href='#'
            className='flex items-center justify-center text-center py-4 px-10 border'
            style={{
              borderRadius: '25px',
            }}
          >
            My Order
            <img src={cart} alt='cart' className='ml-3' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
