import TodoItemProgress from '../progresses/TodoItemProgress';
import Elipsis from '../../assets/icons/elipsis.svg';
import Button from '../button/Button';
import ContextMenu from '../context-menu/ContextMenu';
import { useContextMenuStore } from '../../lib/hooks/stores/useContextMenuStore';
import PropTypes from 'prop-types';

TaskCard.propTypes = {
  prev_board_id: PropTypes.string,
  next_board_id: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  progress_percentage: PropTypes.number,
};

export default function TaskCard(props) {
  const { id, name, progress_percentage, prev_board_id, next_board_id } = props;

  const { contextMenuIndex, openContextMenu, closeContextMenu } =
    useContextMenuStore();

  const handleButtonClick = () => {
    console.log(contextMenuIndex);
    if (contextMenuIndex === id) {
      closeContextMenu();
    } else {
      openContextMenu(id);
    }
  };

  return (
    <div className='px-4 pt-4 pb-2 border-black bg-white border rounded-md'>
      <div className='space-y-6'>
        <div>
          <h4 className='py-px text-sm font-bold'>{name}</h4>
        </div>
        <div className='grid grid-cols-2'>
          <TodoItemProgress progress_percentage={progress_percentage} />
          <div className='place-self-end'>
            <Button onClick={handleButtonClick} noBg>
              <ContextMenu
                id={id}
                isOpen={contextMenuIndex === id}
                prev_board_id={prev_board_id}
                next_board_id={next_board_id}
              />
              <img src={Elipsis} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
