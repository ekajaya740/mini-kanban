import PropTypes from 'prop-types';

SignCard.propTypes = {
  children: PropTypes.any,
};

export default function SignCard(props) {
  const { children } = props;
  return <div className='border border-black p-4'>{children}</div>;
}
