import PropTypes from 'prop-types';
import Button from '../button/Button';

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
};

export function Modal(props) {
  const { isOpen, actions, title, children, onClose, icon } = props;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <div
        className={`absolute inset-0 bg-black opacity-50 
 ${isOpen ? 'block' : 'hidden'}`}></div>
      <div className={`relative bg-white rounded-lg p-8 shadow-md max-w-sm`}>
        <div className='flex flex-col'>
          <div className='flex space-x-4'>
            {icon && <img src={icon} />}
            <h2 className='text-2xl font-bold'>{title}</h2>
          </div>
          <div>{children}</div>
        </div>
        <div className='flex justify-end space-x-3'>
          <Button onClick={onClose} bordered usePadding>
            Cancel
          </Button>
          {actions}
        </div>
      </div>
    </div>
  );
}
