import TodoItemsList from '../lists/TodoItemsList';
import Button from '../button/Button';
import PlusCircle from '../../assets/icons/plus-circle.svg';
import { useState } from 'react';
import NewTaskModal from '../modals/NewTaskModal';

export default function TodoCard() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='pt-3 px-3 border-black border rounded-md max-w-80 w-full space-y-3'>
        <div className='space-y-1'>
          <h2 className='px-2 py-px text-xs border border-black w-fit rounded-sm'>
            Hehe
          </h2>
          <h3 className='text-xs font-bold'>Januari - Maret</h3>
          <TodoItemsList />
        </div>
        <div>
          <Button
            onClick={() => {
              setOpen(true);
            }}>
            <img src={PlusCircle} />
            <span>New Task</span>
          </Button>
        </div>
      </div>
      <NewTaskModal isOpen={open} onClose={() => setOpen()} />
    </>
  );
}
