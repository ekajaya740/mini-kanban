import TodoItemProgress from '../progresses/TodoItemProgress';
import Elipsis from '../../assets/icons/elipsis.svg';
import Button from '../button/Button';
import ContextMenu from '../context-menu/ContextMenu';
import { useContextMenuStore } from '../../lib/hooks/stores/useContextMenuStore';
import PropTypes from 'prop-types';

TodoItemCard.propTypes = {
  index: PropTypes.number,
};

export default function TodoItemCard(props) {
  const { index } = props;

  const { contextMenuIndex, openContextMenu, closeContextMenu } =
    useContextMenuStore();

  const handleButtonClick = () => {
    if (contextMenuIndex === index) {
      closeContextMenu();
    } else {
      openContextMenu(index);
    }
  };

  return (
    <div className='px-4 pt-4 pb-2 border-black border rounded-md'>
      <div className='space-y-6'>
        <div>
          <h4 className='py-px text-sm font-bold'>
            Re-designed the zero-g doggie bags. No more spills!
          </h4>
        </div>
        <div className='grid grid-cols-2'>
          <TodoItemProgress progress_percentage={80} />
          <div className='place-self-end'>
            <Button onClick={handleButtonClick}>
              <ContextMenu
                isOpen={contextMenuIndex === index}
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
