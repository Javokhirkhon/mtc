import Banner from './sections/Banner'
import Header from './sections/Header'
import Slider from './sections/Slider'
import Footer from './sections/Footer'
import Button from './components/Button'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'

const App = () => (
  <>
    <Header />
    <Banner />
    <div className='xl:flex items-center'>
      <img src={image1} alt='image1' className='w-screen xl:w-1/2' />
      <div className='xl:w-1/2 p-8 xl:pr-0 xl:pl-16 xl:py-0 xl:max-w-xl'>
        <div
          className='uppercase text-sm tracking-widest'
          style={{
            color: '#D4B254',
          }}
        >
          Quality Craftmanship from build to delivery
        </div>
        <div
          className='text-3xl xl:text-4xl mt-4 mb-8 font-helvetica font-bold'
          style={{ color: '#222222' }}
        >
          Discover the beauty of a handmade kitchen
        </div>
        <div
          className='text-base mb-7'
          style={{
            color: '#777777',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
          feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
          eu pharetra tincidunt, mauris purus ultrices.
        </div>
        <Button text='About Us' />
      </div>
    </div>
    <Slider />
    <div className='flex flex-col items-center my-24'>
      <div
        className='text-3xl'
        style={{
          color: '#222222',
        }}
      >
        Customer Gallery
      </div>
      <div className='container flex flex-col xl:flex-row justify-center items-center gap-5 mt-8 mb-10'>
        {[image2, image3, image4, image5].map((item, index) => (
          <img key={index} src={item} alt='image' className='w-1/2 xl:w-1/4' />
        ))}
      </div>

      <Button text='View More' />
    </div>
    <Footer />
  </>
)

export default App
