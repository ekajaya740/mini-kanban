import PropTypes from 'prop-types'; // ES6

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default function Button(props) {
  const { children, onClick } = props;
  return (
    <button
      className='inline-flex space-x-2 text-sm items-center'
      onClick={onClick}>
      {children}
    </button>
  );
}
