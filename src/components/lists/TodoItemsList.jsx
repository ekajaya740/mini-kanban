import TodoItemCard from '../cards/TodoItemCard';

export default function TodoItemsList() {
  return (
    <div className='space-y-3'>
      <TodoItemCard />
      <TodoItemCard />
      <TodoItemCard />
    </div>
  );
}
