import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any,
};

export default function Input(props) {
  const { placeholder, type, label, name, control } = props;
  const {
    field: { ref, value, ...rest },
    formState: { errors },
  } = useController({ name, control });

  return (
    <div className='flex flex-col space-y-1'>
      <label className='text-gray-700 mb-2 text-sm h-fit w-full text-start'>
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        name={name}
        className='border rounded-sm px-4 py-2 focus:outline-none focus:border-blue-500 text-sm'
        placeholder={placeholder}
        value={value || ''}
        min={type === 'number' && 0}
        max={type === 'number' && 100}
        {...rest}
      />
      <label>{errors[name] && `${errors[name].message}`}</label>
    </div>
  );
}
