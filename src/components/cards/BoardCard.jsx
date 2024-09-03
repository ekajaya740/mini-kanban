import Button from '../button/Button';
import PlusCircle from '../../assets/icons/plus-circle.svg';
import { useState } from 'react';
import NewTaskModal from '../modals/NewTaskModal';
import PropTypes from 'prop-types';
import TaskItemsList from '../lists/TaskItemsList';
import { Droppable } from 'react-beautiful-dnd';

BoardCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  task: PropTypes.array,
  prev_board_id: PropTypes.string,
  next_board_id: PropTypes.string,
};

export default function BoardCard(props) {
  const {
    title,
    start_date,
    end_date,
    task,
    id,
    prev_board_id,
    next_board_id,
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=' relative border-black border rounded-md min-w-80 max-w-sm w-full space-y-3 overflow-y-scroll max-h-96 h-full'>
        <div className=' pt-3 px-3 space-y-1 sticky top-0 bg-white w-full h-full z-30'>
          <h2 className='px-2 py-px text-xs border border-black w-fit rounded-sm'>
            {title}
          </h2>
          <h3 className='text-xs font-bold'>
            {start_date} until {end_date}
          </h3>
        </div>
        <div className='pt-3 px-3'>
          <Droppable droppableId={`${id}`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TaskItemsList
                  task={task ?? []}
                  prev_board_id={prev_board_id}
                  next_board_id={next_board_id}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className=' pt-3 px-3 sticky bottom-0 bg-white w-full h-full z-30'>
          <Button
            onClick={() => {
              setOpen(true);
            }}>
            <img src={PlusCircle} />
            <span>New Task</span>
          </Button>
        </div>
      </div>
      <NewTaskModal isOpen={open} onClose={() => setOpen()} board_id={id} />
    </>
  );
}
