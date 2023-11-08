import PropTypes from 'prop-types'

const Button = ({ text, boxShadow }) => (
  <button
    className='flex items-center justify-center text-center text-base tracking-widest uppercase py-5 px-14 text-white'
    style={{
      backgroundColor: '#D4B254',
      boxShadow: boxShadow ? '0px 2px 10px #00000033' : 'none',
      borderRadius: '30px',
    }}
  >
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  boxShadow: PropTypes.bool,
}

export default Button
