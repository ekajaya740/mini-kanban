import TodoItemProgress from '../progresses/TodoItemProgress';
import Elipsis from '../../assets/icons/elipsis.svg';
import Button from '../button/Button';
import ContextMenu from '../context-menu/ContextMenu';
import { useContextMenuStore } from '../../lib/hooks/stores/useContextMenuStore';
import PropTypes from 'prop-types';

TaskCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  progress_percentage: PropTypes.number,
};

export default function TaskCard(props) {
  const { id, name, progress_percentage } = props;

  const { contextMenuIndex, openContextMenu, closeContextMenu } =
    useContextMenuStore();

  const handleButtonClick = () => {
    if (contextMenuIndex === id) {
      closeContextMenu();
    } else {
      openContextMenu(id);
    }
  };

  return (
    <div className='px-4 pt-4 pb-2 border-black border rounded-md'>
      <div className='space-y-6'>
        <div>
          <h4 className='py-px text-sm font-bold'>{name}</h4>
        </div>
        <div className='grid grid-cols-2'>
          <TodoItemProgress progress_percentage={progress_percentage} />
          <div className='place-self-end'>
            <Button onClick={handleButtonClick}>
              <ContextMenu
                isOpen={contextMenuIndex === id}
                onClose={closeContextMenu}
              />
              <img src={Elipsis} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
