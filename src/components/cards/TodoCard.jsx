import TodoItemsList from '../lists/TodoItemsList';

export default function TodoCard() {
  return (
    <div className='pt-3 px-3 border-black border rounded-md max-w-80 w-full'>
      <div className='space-y-1'>
        <h2 className='px-2 py-px text-xs border border-black w-fit rounded-sm'>
          Hehe
        </h2>
        <h3 className='text-xs font-bold'>Januari - Maret</h3>
        <TodoItemsList />
      </div>
    </div>
  );
}
