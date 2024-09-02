import TodoItemCard from '../cards/TodoItemCard';

export default function TodoItemsList() {
  return (
    <div className='space-y-3 py-3'>
      <TodoItemCard index={0} />
      <TodoItemCard index={1} />
      <TodoItemCard index={2} />
    </div>
  );
}
