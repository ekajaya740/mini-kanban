import BoardsList from '../../components/lists/BoardsList';

export default function MainPage() {
  return (
    <main className='py-5 px-[3.125rem]'>
      <h1 className='text-xl font-bold'>Product Roadmap</h1>

      <BoardsList />
    </main>
  );
}
