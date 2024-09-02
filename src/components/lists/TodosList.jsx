import TodoCard from '../cards/TodoCard';

export default function TodosList() {
  return (
    <div className='overflow-hidden w-full pr-[3.125rem]'>
      <div className='space-x-4 flex overflow-x-auto'>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
}
