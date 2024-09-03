import { useBoards } from '../../lib/hooks/queries/board/useBoards.js';
import Button from '../button/Button.jsx';
import NewBoardModal from '../modals/NewBoardModal.jsx';
import { useState } from 'react';
import BoardCard from '../cards/BoardCard.jsx';

export default function BoardsList() {
  const boards = useBoards();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='w-dvw pr-44 max-h-dvh'>
        <div className='space-x-4 flex items-start overflow-x-auto w-full'>
          {boards.data?.map((item) => (
            <BoardCard key={item.id} {...item} />
          )) ?? <></>}
          <Button onClick={() => setOpen(true)}>Create Board</Button>
        </div>
      </div>
      <NewBoardModal isOpen={open} onClose={() => setOpen()} />
    </>
  );
}
