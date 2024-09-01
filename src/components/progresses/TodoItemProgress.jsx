import PropTypes from 'prop-types';

TodoItemProgress.propTypes = {
  progress_percentage: PropTypes.number,
};

export default function TodoItemProgress(props) {
  const { progress_percentage } = props;

  return (
    <div className='flex items-center space-x-2 w-full'>
      <div className='relative w-48 h-2 bg-gray-200 rounded-full'>
        <div
          className={'absolute top-0 left-0 h-2 bg-blue-500 rounded-full'}
          style={{
            width: `${progress_percentage}%`,
          }}></div>
      </div>
      <span className='text-gray-600 text-sm'>{progress_percentage}%</span>
    </div>
  );
}
