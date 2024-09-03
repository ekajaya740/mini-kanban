import TaskCard from '../cards/TaskCard';

import PropTypes from 'prop-types';

TodoItemsList.propTypes = {
  task: PropTypes.array,
};

export default function TodoItemsList(props) {
  const { task } = props;
  return (
    <div className='space-y-3 py-3'>
      {task.length === 0 ? (
        <p>Tidak ada data</p>
      ) : (
        task.map((item) => <TaskCard key={item.id} index={item.id} {...item} />)
      )}
    </div>
  );
}
