import TodosList from '../../components/lists/TodosList';

export default function MainPage() {
  return (
    <main className='py-5 px-[3.125rem] space-y-4 w-full'>
      <h1 className='text-xl font-bold'>Product Roadmap</h1>
      <TodosList />
    </main>
  );
}
