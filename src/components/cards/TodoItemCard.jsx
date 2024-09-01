import TodoItemProgress from '../progresses/TodoItemProgress';
import Elipsis from '../../assets/icons/elipsis.svg';
import Button from '../button/Button';
import PlusCircle from '../../assets/icons/plus-circle.svg';

export default function TodoItemCard() {
  return (
    <div className='p-4 border-black border rounded-md'>
      <div className='space-y-6'>
        <div>
          <h4 className='px-2 py-px text-sm font-bold'>Title</h4>
        </div>
        <div className='grid grid-cols-2'>
          <TodoItemProgress progress_percentage={80} />
          <div className='place-self-end'>
            <Button>
              <img src={Elipsis} />
            </Button>
          </div>
        </div>
        <div>
          <Button>
            <img src={PlusCircle} />
            <span>New Task</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
