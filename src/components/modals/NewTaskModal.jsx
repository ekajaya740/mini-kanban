import PropTypes from 'prop-types';
import { Modal } from './Modal';
import Button from '../button/Button';
import { FormProvider, useForm } from 'react-hook-form';

import NewTaskForm from '../forms/NewTaskForm';
import { useCreateTask } from '../../lib/hooks/queries/item/useTasks';
import { createTaskRequestSchema } from '../../lib/schemas/task';

NewTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  icon: PropTypes.any,
  board_id: PropTypes.string,
};

export default function NewTaskModal(props) {
  const { isOpen, onClose, board_id } = props;
  const rhf = useForm();

  const createTask = useCreateTask();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'New Task'}
      actions={
        <Button
          color={'success'}
          usePadding
          onClick={async () => {
            const vData = await createTaskRequestSchema.validate({
              ...rhf.getValues(),
              board_id: board_id,
            });

            await createTask.mutateAsync(vData);

            rhf.resetField();

            onClose();
          }}>
          Create
        </Button>
      }>
      <FormProvider {...rhf}>
        <NewTaskForm />
      </FormProvider>
    </Modal>
  );
}
