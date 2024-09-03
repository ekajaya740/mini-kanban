import TaskCard from '../cards/TaskCard';

import PropTypes from 'prop-types';

TaskItemsList.propTypes = {
  task: PropTypes.array,
  prev_board_id: PropTypes.string,
  next_board_id: PropTypes.string,
};

export default function TaskItemsList(props) {
  const { task, prev_board_id, next_board_id } = props;
  return (
    <div className='space-y-3 py-3'>
      {task.length === 0 ? (
        <p>Tidak ada data</p>
      ) : (
        task.map((item) => (
          <TaskCard
            key={item.id}
            index={item.id}
            {...item}
            prev_board_id={prev_board_id}
            next_board_id={next_board_id}
          />
        ))
      )}
    </div>
  );
}
