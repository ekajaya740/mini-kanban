import clsx from 'clsx';
import PropTypes from 'prop-types';
import CheckCircle from '../../assets/icons/check-circle.svg';

TodoItemProgress.propTypes = {
  progress_percentage: PropTypes.number,
};

export default function TodoItemProgress(props) {
  const { progress_percentage } = props;

  return (
    <div className='flex items-center space-x-2 w-full'>
      <div className='relative w-48 h-2 bg-gray-200 rounded-full'>
        <div
          className={clsx('absolute top-0 left-0 h-2  rounded-full', {
            'bg-blue-500': progress_percentage < 100,
            'bg-success': progress_percentage >= 100,
          })}
          style={{
            width: `${progress_percentage}%`,
          }}></div>
      </div>
      {progress_percentage < 100 ? (
        <span className='text-gray-600 text-sm'>{progress_percentage}%</span>
      ) : (
        <span className='text-xl'>
          <img src={CheckCircle} width={32} height={32} />
        </span>
      )}
    </div>
  );
}
