import TodoItemProgress from '../progresses/TodoItemProgress';
import Elipsis from '../../assets/icons/elipsis.svg';
import Button from '../button/Button';
import ContextMenu from '../context-menu/ContextMenu';

export default function TodoItemCard() {
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
            <Button>
              <ContextMenu />
              <img src={Elipsis} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
