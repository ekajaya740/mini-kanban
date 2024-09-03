import PropTypes from 'prop-types';
import { useMoveTask } from '../../lib/hooks/queries/task/useTasks';
import { moveTaskRequestSchema } from '../../lib/schemas/task';
import { useState } from 'react';
import UpdateTaskModal from '../modals/UpdateTaskModal';
import DeleteTaskModal from '../modals/DeleteTaskModal';

ContextMenu.propTypes = {
  isOpen: PropTypes.bool,
  prev_board_id: PropTypes.string,
  next_board_id: PropTypes.string,
  id: PropTypes.string,
  onClose: PropTypes.func,
};

export default function ContextMenu(props) {
  const { isOpen, prev_board_id, next_board_id, id } = props;

  const [openUpdateModal, setOpenUpdateModal] = useState();

  const [openDeleteModal, setOpenDeleteModal] = useState();

  const moveTask = useMoveTask();

  return (
    <>
      <div
        className={`absolute z-30 right-4 text-left bg-white rounded-md shadow-md ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <ul className='py-2'>
          {prev_board_id && (
            <li
              className='px-4 py-2 hover:bg-gray-100'
              onClick={async () => {
                const vData = await moveTaskRequestSchema.validate({
                  id: id,
                  board_id: prev_board_id,
                });

                await moveTask.mutateAsync(vData);
              }}>
              Move Left
            </li>
          )}
          {next_board_id && (
            <li
              className='px-4 py-2 hover:bg-gray-100'
              onClick={async () => {
                const vData = await moveTaskRequestSchema.validate({
                  id: id,
                  board_id: next_board_id,
                });

                await moveTask.mutateAsync(vData);
              }}>
              Move Right
            </li>
          )}
          <li
            className='px-4 py-2 hover:bg-gray-100'
            onClick={() => {
              setOpenUpdateModal(true);
            }}>
            Edit
          </li>
          <li
            className='px-4 py-2 hover:bg-gray-100'
            onClick={() => {
              setOpenDeleteModal(true);
            }}>
            Delete
          </li>
        </ul>
      </div>
      <UpdateTaskModal
        isOpen={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
      />
      <DeleteTaskModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      />
    </>
  );
}
