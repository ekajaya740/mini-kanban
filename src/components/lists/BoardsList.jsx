import { useBoards } from '../../lib/hooks/queries/board/useBoards.js';
import Button from '../button/Button.jsx';
import NewBoardModal from '../modals/NewBoardModal.jsx';
import { useState } from 'react';
import BoardCard from '../cards/BoardCard.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import { useMoveTask } from '../../lib/hooks/queries/task/useTasks.js';
import { moveTaskRequestSchema } from '../../lib/schemas/task.js';

export default function BoardsList() {
  const boards = useBoards();

  const [open, setOpen] = useState(false);

  const moveTask = useMoveTask();

  const handleDragEnd = async (res) => {
    const vData = await moveTaskRequestSchema.validate({
      id: res.draggableId,
      board_id: res.destination.droppableId,
    });
    await moveTask.mutateAsync(vData);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='w-dvw pr-44 max-h-dvh'>
          <div className='flex space-x-4'>
            {boards.data?.map((item, index) => (
              <BoardCard
                key={item.id}
                {...item}
                prev_board_id={boards.data[index - 1]?.id ?? undefined}
                next_board_id={boards.data[index + 1]?.id ?? undefined}
              />
            )) ?? <></>}
            <Button onClick={() => setOpen(true)}>Create Board</Button>
          </div>
        </div>
      </DragDropContext>
      <NewBoardModal isOpen={open} onClose={() => setOpen()} />
    </>
  );
}
