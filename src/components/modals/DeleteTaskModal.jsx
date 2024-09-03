import PropTypes from 'prop-types';
import { Modal } from './Modal';
import Button from '../button/Button';
import { useDeleteTask } from '../../lib/hooks/queries/task/useTasks';

DeleteTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
  id: PropTypes.string,
};

export default function DeleteTaskModal(props) {
  const { isOpen, onClose, id } = props;

  const deleteTask = useDeleteTask(id);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Delete Task'}
      actions={
        <Button
          color={'error'}
          usePadding
          onClick={() => {
            deleteTask.mutate();
          }}>
          Delete
        </Button>
      }>
      <p className='text-left'>
        Are you sure want to delete this task? your action can’t be reverted.
      </p>
    </Modal>
  );
}
