import logo from '../assets/logo.png'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'

const data = [
  {
    title: 'About',
    children: ['Shop', 'Plan My Kitchen', 'About Us', 'Gallery'],
  },
  {
    title: 'Service',
    children: ['FAQ', 'Contact', 'How to Buy', 'Downloads'],
  },
  {
    title: 'Info',
    children: ['Delivery', 'Terms', 'Privacy'],
  },
]

const Footer = () => {
  return (
    <div className='bg-zinc-900 text-white py-14'>
      <div className='container'>
        <div className='flex items-center justify-between gap-4 mb-12'>
          <div className='w-full h-px bg-white opacity-20' />
          <img src={logo} alt='logo' />
          <div className='w-full h-px bg-white opacity-20' />
        </div>
        <div className='xl:flex justify-between w-full text-center xl:text-left xl:w-3/5 mx-auto'>
          {data.map(({ title, children }) => (
            <div key={title}>
              <div className='text-2xl mb-8'>{title}</div>
              {children.map((child) => (
                <a
                  key={child}
                  href='#'
                  className='block uppercase text-sm tracking-widest opacity-80 mb-3'
                >
                  {child}
                </a>
              ))}
            </div>
          ))}
          <div>
            <div className='text-2xl mb-8'>Follow</div>
            <div className='flex justify-center xl:justify-start gap-4'>
              {[fb, twitter, insta].map((item, index) => (
                <a href='#' key={index}>
                  <img src={item} alt='social' />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className='text-sm w-96 mx-auto text-center opacity-50 my-12'
          style={{ lineHeight: '26px' }}
        >
          Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          Responsive website design, Development & Hosting by mtc.
        </div>
        <div className='w-full h-px bg-white opacity-20' />
      </div>
    </div>
  )
}

export default Footer
