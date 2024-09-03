import Button from '../button/Button';
import PlusCircle from '../../assets/icons/plus-circle.svg';
import { useState, useMemo } from 'react';
import NewTaskModal from '../modals/NewTaskModal';
import PropTypes from 'prop-types';
import TaskItemsList from '../lists/TaskItemsList';
import { Droppable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import dayjs from 'dayjs';

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

  const randomColor = useMemo(() => {
    const color = [
      'magenta',
      'red',
      'volcano',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple',
    ];
    return color[Math.floor(Math.random() * color.length)];
  }, []);

  return (
    <>
      <div
        className={clsx(
          'relative rounded-md min-w-80 max-w-sm w-full space-y-3 overflow-y-scroll max-h-96 h-full',
          {
            'border-magenta-border border-2 bg-magenta-bg':
              randomColor === 'magenta',
            'border-red-border border-2 bg-red-bg': randomColor === 'red',
            'border-volcano-border border-2 bg-volcano-bg':
              randomColor === 'volcano',
            'border-orange-border border-2 bg-orange-bg':
              randomColor === 'orange',
            'border-gold-border border-2 bg-gold-bg': randomColor === 'gold',
            'border-lime-border border-2 bg-lime-bg': randomColor === 'lime',
            'border-green-border border-2 bg-green-bg': randomColor === 'green',
            'border-cyan-border border-2 bg-cyan-bg': randomColor === 'cyan',
            'border-blue-border border-2 bg-blue-bg': randomColor === 'blue',
            'border-geekblue-border border-2 bg-geekblue-bg':
              randomColor === 'geekblue',
            'border-purple-border border-2 bg-purple-bg':
              randomColor === 'purple',
          }
        )}>
        <div
          className={clsx(
            'pt-3 pb-1 px-3 space-y-1 sticky top-0 w-full h-full z-30',
            {
              ' bg-magenta-bg': randomColor === 'magenta',
              ' bg-red-bg': randomColor === 'red',
              ' bg-volcano-bg': randomColor === 'volcano',
              ' bg-orange-bg': randomColor === 'orange',
              ' bg-gold-bg': randomColor === 'gold',
              ' bg-lime-bg': randomColor === 'lime',
              ' bg-green-bg': randomColor === 'green',
              ' bg-cyan-bg': randomColor === 'cyan',
              ' bg-blue-bg': randomColor === 'blue',
              ' bg-geekblue-bg': randomColor === 'geekblue',
              ' bg-purple-bg': randomColor === 'purple',
            }
          )}>
          <h2
            className={clsx('px-2 py-px text-xs border w-fit rounded-sm', {
              'border-magenta-border bg-magenta-bg text-magenta-text':
                randomColor === 'magenta',
              'border-red-border bg-red-bg text-red-text':
                randomColor === 'red',
              'border-volcano-border bg-volcano-bg text-volcano-text':
                randomColor === 'volcano',
              'border-orange-border bg-orange-bg text-orange-text':
                randomColor === 'orange',
              'border-gold-border bg-gold-bg text-gold-text':
                randomColor === 'gold',
              'border-lime-border bg-lime-bg text-lime-text':
                randomColor === 'lime',
              'border-green-border bg-green-bg text-green-text':
                randomColor === 'green',
              'border-cyan-border bg-cyan-bg text-cyan-text':
                randomColor === 'cyan',
              'border-blue-border bg-blue-bg text-blue-text':
                randomColor === 'blue',
              'border-geekblue-border bg-geekblue-bg text-geekblue-text':
                randomColor === 'geekblue',
              'border-purple-border bg-purple-bg text-purple-text':
                randomColor === 'purple',
            })}>
            {title}
          </h2>
          <h3 className='text-xs font-bold'>
            {dayjs(start_date).format('MMMM')} -{' '}
            {dayjs(end_date).format('MMMM')}
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
        <div
          className={clsx('pt-3 px-3 sticky bottom-0 w-full h-full z-30', {
            ' bg-magenta-bg': randomColor === 'magenta',
            ' bg-red-bg': randomColor === 'red',
            ' bg-volcano-bg': randomColor === 'volcano',
            ' bg-orange-bg': randomColor === 'orange',
            ' bg-gold-bg': randomColor === 'gold',
            ' bg-lime-bg': randomColor === 'lime',
            ' bg-green-bg': randomColor === 'green',
            ' bg-cyan-bg': randomColor === 'cyan',
            ' bg-blue-bg': randomColor === 'blue',
            ' bg-geekblue-bg': randomColor === 'geekblue',
            ' bg-purple-bg': randomColor === 'purple',
          })}>
          <Button
            noBg
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
